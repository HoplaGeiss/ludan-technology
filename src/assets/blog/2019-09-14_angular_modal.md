At first glance, modals are just some simple HMTL and css components, but things get more complicated when you try to create a reusable component.

Let's first gather a list of requirements for our modal:
- Have a default styling for the header, content and footer.
- Be able to open more than one modal.

Source code: [https://github.com/HoplaGeiss/ludan-modal](https://github.com/HoplaGeiss/ludan-modal)

Demo: [https://ludan.io/library/modal](https://ludan.io/library/modal)

Let's now have a look at how we want to invoke the modal component.

### Parent component

```typescript
<button (click)="openModal()">Open the modal</button>

<ludan-modal [modalId]="'modalId'" [modalTitle]="'Title'">
  <div class="body">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit eaque, ratione hic facere quasi facilis qui unde
    odio quo ut fugiat, voluptatem dolor, minima, ea perferendis expedita maxime ipsum atque.
  </div>
  <div class="footer">Custom footer</div>
</ludan-modal>
```

As you can see nothing extraordinary there, 3 classes with the header, body and footer. One `input` for the `modalId`. For convenience, I also added a button that calls `modalService.open('modalId')`.

Since we need to be able to handle more than one modal, we need to keep track of them in a service.

```typescript
openModal = () => {
  this.modalService.open('modalId');
};
```

Let's have a look at that service.

### Modal Service

``` typescript
private modals: ModalComponent[] = [];

registerModal(newModal: ModalComponent): ModalComponent[] {
  const modal = this.findModal(newModal.modalId);

  // Delete existing to replace the modal
  if (modal) this.modals.splice(this.modals.indexOf(modal));

  this.modals.push(newModal);
  return this.modals;
}

open(modalId: string): ModalComponent {
  const modal = this.findModal(modalId);

  if (modal) modal.isOpen = true;
  return modal;
}

close(modalId: string, checkBlocking = false): ModalComponent {
  const modal = this.findModal(modalId);

  if (modal && (!checkBlocking || (checkBlocking && !modal.blocking))) modal.isOpen = false;

  return modal;
}

private findModal(modalId: string): ModalComponent {
  for (const modal of this.modals) {
    if (modal.modalId === modalId) return modal;
  }
  return null;
}
```

The service has an array of modals and four pretty self-explanatory methods, let's go quickly through them.

- findModal - Loops through the modals and checks if any modal matches the `modalId` passed as input. It returns the matching modal or null if it does not find it.
- registerModal - First looks if the modal already exists by calling `findModal`, if it finds it, it removes it from the modals. Then it adds the modal passed as input to the modals.
- open - Calls `findModal` to find the modal. Then we set `isOpen` to true on the modal component and we return it.
- close - Calls `findModal` to find the modal. Sets `isOpen` to false in case `checkBlocking` is false or `checkBlocking` is true and the modal is not blocking. We will explain later what that means.

Now that we went through that, let's have a look at the modal component.

### Modal component

``` typescript
<div [ngClass]="{ closed: !isOpen }">
  <div class="modal-overlay" (click)="close(true)"></div>

  <div class="modal">
    <div class="title" *ngIf="modalTitle">
      <span class="text">{{ modalTitle }}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        (click)="close(true)"
        class="close"
      >
        <path fill="white"
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
        />
        <path d="M0 0h24v24H0z" fill="none" />
      </svg>
    </div>

    <ng-content select=".header"></ng-content>
    <ng-content select=".body"></ng-content>
    <ng-content select=".footer"></ng-content>
  </div>
</div>
```

This template is mostly based on the use of `ng-content` with class names. That's how we manage to handle the header, the content, and the footer separately.

However, there is one subtility here. Usually, for the header, you want to have a title and a close cross to hide the modal. Passing this every time to the modal component isn't very DRY. So for convenience we added a `modalTitle`, which will pass that string to our `title` div, which will create the default header with the cross and all the style we need.

If you wanted to pass a custom header, just ignore that input and pass a children div with the `.header` class.

```typescript
@Input() modalId: string;
@Input() modalTitle: string;
@Input() blocking = false;
isOpen = false;

@HostListener('window:keyup', ['$event'])
keyEvent(event: KeyboardEvent) {
  this.keyup(event);
}

constructor(private modalService: ModalService) {}

ngOnInit() {
  this.modalService.registerModal(this);
}

close(checkBlocking = false): void {
  this.modalService.close(this.modalId, checkBlocking);
}

private keyup(event: KeyboardEvent): void {
  if (event.keyCode === 27) {
    this.modalService.close(this.modalId, true);
  }
}
```

**Attributes**

- modalId - unique Id of the modal
- modalTitle - string displayed in the default header
- blocking - boolean defining if the modal can be closed by clicking anywhere outside the modal.

**Function**

- ngOnInit - Just calls `modalService.registerModal` to make our service aware of the modal.
- close - Calls the `modalService.close` to close the modal.
- keyup - HostListener to the `Esc` key to trigger the close of the modal.

For completeness, I am also going to add here the css I use to style the modal.

### Modal Styling

``` scss
$primary: #e3875a;
$grey: #dddddd;

.modal-overlay {
  background-color: rgba(0, 0, 0, 0.4);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
}

.closed {
  .modal {
    top: -50%;
  }
  .modal-overlay {
    display: none;
  }
}

.modal {
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.22), 0 17px 20px 0 rgba(0, 0, 0, 0.12);
  background-color: white;
  max-height: calc(100% - 10em);
  overflow-y: auto;
  position: fixed;
  top: 7em;
  width: 600px;
  left: calc(50% - 300px);
  margin: 0 auto;
  z-index: 1100;
  transition: all 0.5s ease;

  @media only screen and (max-width: 700px) {
    width: 400px;
    left: calc(50% - 200px);
  }

  @media only screen and (max-width: 450px) {
    width: 300px;
    left: calc(50% - 150px);
  }

  .body {
    padding: 1.2em;
  }
}

.title {
  background-color: $primary;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  color: white;

  .close {
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
}
```

That's it! Enjoy your Angular Modal!