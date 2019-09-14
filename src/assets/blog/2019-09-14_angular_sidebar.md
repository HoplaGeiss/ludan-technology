In this blog post, we are going to play around with Angular Animation and create a nice sidebar.

Source code: [https://github.com/HoplaGeiss/ludan-sidebar](https://github.com/HoplaGeiss/ludan-sidebar)

Demo: [https://ludan.io/library/sidebar](https://ludan.io/library/sidebar)

Let's start with the template.

### Sidebar template

``` typescript
<nav class="sidebar">
  <div
    class="overlay"
    (click)="overlayClick()"
    [@toggleOverlay]="sidebarOpen"
    [class.hidden]="!sidebarOpen"
  ></div>
  <ul class="nav" [@toggleSidebar]="sidebarOpen">
    <li *ngFor="let item of items" (click)="selectItem(item)" class="link">
      {{ item.label }}
    </li>
  </ul>
</nav>
```

The sidebar is split into two sibling elements. The `overlay` is just here to add an opacity layer over the text behind the sidebar and the `nav` is the sidebar.

**Overlay element**

Listens to clicks and calls `overlayClick` which hide the overlay and the sidebar. It also has a `toggleOverlay` animation and a hidden class.

**Nav element**

List of items with a `toggleSidebar` animation and each of its element listen to click to call `selectItem`.

Now let's look at those methods.

### Sidebar Methods

```typescript
@Input() items: NavbarItemInterface[];
@Input() selectedItem: NavbarItemInterface;
@Input() sidebarOpen = false;

@Output() selectEvent = new EventEmitter();
@Output() closeEvent = new EventEmitter();

selectItem = item => {
  this.selectEvent.emit(item);
  if (this.sidebarOpen) {
    this.sidebarOpen = false;
  }
}

overlayClick = () => {
  if (this.sidebarOpen) {
    this.closeEvent.emit(true);
  }
}
```

Let's go through this elements one by one.

**Inputs**:

- items - list of item to display in the navbar.
- selectedItem - currently selected item.
- sidebarOpen - boolean that drives the state of the sidebar.

**Outputs**:

- selectEvent - emitted when an element gets selected.
- closeEvent - emitted when the sidebar should close.

**Functions**

- selectItem - emits `selectEvent` and closes the sidebar.
- overlayClick - emits `closeEvent`

Let's have a look at those famous animations now!

### Sidebar Animations

``` typescript
trigger('toggleOverlay', [
  state(
    '1',
    style({
      opacity: 0.5
    })
  ),
  state(
    '0',
    style({
      opacity: 0
    })
  ),
  transition('1 => 0', animate('200ms 300ms ease-out')),
  transition('0 => 1', animate('200ms ease-in'))
]),
trigger('toggleSidebar', [
  state('1', style({ transform: 'translateX(0)' })),
  state('0', style({ transform: 'translateX(200px)' })),
  transition('1 => 0', animate('200ms ease-out')),
  transition('0 => 1', animate('200ms 300ms ease-in'))
])
```

As we saw before we have two animations.

**toggleOverlay**

- state 0 - opacity 0
- state 1 - opacity 1
- transition 0 => 1: show with a 200ms animation.
- transition 1 => 0: close with 300ms delay and 200ms animation.

**toggleSidebar**

- state 0 - 200px to the right
- state 1 - back to default
- transition 1 => 0: show with 300ms delay and 200ms animation.
- transition 0 => 1: close with 200ms animation.

Since most of the animations are handled here, we have a pretty simple styling file. Let's have a look at it.

### Sidebar styling

``` scss
.sidebar {
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: black;
    opacity: 0.5;
    z-index: 10;

    &.hidden {
      pointer-events: none;
    }
  }

  .nav {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    z-index: 10;
    box-sizing: border-box;
    flex-direction: column;
    position: fixed;
    right: 0;
    top: 0px;
    width: 200px;
    height: 100%;
    background: white;
    padding: 10px;

    .link {
      padding: 5px 0;
      cursor: pointer;

      &::after {
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background: #000;
        transition: width 0.2s;
      }

      &:hover::after {
        width: 10%;
      }
    }
  }
}
```
The only thing I want to point out in this file is the fancy animation for the nav items thanks to pseudo-elements.

That's it! Enjoy your Angular Sidebar.