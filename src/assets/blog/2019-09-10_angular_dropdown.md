Dropdowns are very simple components, let's see how we can supercharge one with angular!

Source code: [https://github.com/HoplaGeiss/ludan-carousel](https://github.com/HoplaGeiss/ludan-carousel)

Demo: [https://ludan.io/library/dropdown](https://ludan.io/library/dropdown)

First thing first, let's have a look at inputs and outputs of our dropdown.

### Component Inputs and Outputs

``` typescript
@Component({
  selector: 'app-root',
  template: `
    <div class="wrapper">
      <ludan-dropdown
        [items]="items"
        (selectEvent)="selectItem($event)"
        [selectedItem]="selectedItem"
      ></ludan-dropdown>
    </div>
  `
})
export class AppComponent {
  items = ['item 1', 'item 2', 'item 3', 'item 4'];
  selectedItem: any;

  selectItem = item => {
    this.selectedItem = item;
  }
}
```

We have two inputs, `items` and `selectedItem`. That's because we want to be able to control the selected item and the item displayed from outside of the component.
We have one output, `selectedItem` that in this case is very simple as it just calls `selectItem()` which sets `selectedItem`.

Now that we have this defined let's have a look at the dropdown component.

That component can be divided into two, the list of items, called dropdown here and the selected item. Let's inspect the list fist.

### Dropdown's list

Lets first print out a simple list:

``` typescript
<div class="dropdown" [class.hidden]="!dropdownActive">
  <div *ngFor="let item of items" class="item" (click)="selectItem(item)">
    <span>{{ item }}</span>
  </div>
</div>
```

Now that's fairly straightforward. We have a list that is hidden when `dropdownActive` is true and we have a method `selectItem` that gets called on click. Now let's make this a little nicer looking:

``` typescript
<div class="dropdown" [class.hidden]="!dropdownActive">
  <div
    *ngFor="let item of items | dropdownPipe: selectedItem;let last = last"
    class="item"
    [ngClass]="{ last: last }"
    (click)="selectItem(item)"
  >
    <span>{{ item }}</span>
  </div>
</div>
```

As you can see, we kept our list, but we are going to add some styling to the last element of the list thanks to `[ngClass]="{ last: last }"` and we are also going to add a `dropdownPipe` that's going to hide the currently selected item from the list.

That's the pipe we use:

```typescript
transform(items: any[], selectedItem: any): any[] {
  if (!items) return null;
  if (!selectedItem) return items;

  return items.filter(item => {
    if (item !== selectedItem) return item;
  });
}
```

Alright, now let's move on to the selected item part of the dropdown.

### Dropdown's selected item

``` typescript
<div
  class="selected-item"
  [ngClass]="{ active: dropdownActive }"
  (click)="toggleDropdown()"
>
  <div [hidden]="!selectedItem">{{ selectedItem }}</div>
  <div [hidden]="selectedItem">Select an item</div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 284.929 284.929"
    width="24px"
    height="24px"
    class="chevron"
  >
    <path
      fill="white"
      d="M282.082 195.285L149.028 62.24c-1.901-1.903-4.088-2.856-6.562-2.856s-4.665.953-6.567 2.856L2.856 195.285C.95 197.191 0 199.378 0 201.853c0 2.474.953 4.664 2.856 6.566l14.272 14.271c1.903 1.903 4.093 2.854 6.567 2.854s4.664-.951 6.567-2.854l112.204-112.202 112.208 112.209c1.902 1.903 4.093 2.848 6.563 2.848 2.478 0 4.668-.951 6.57-2.848l14.274-14.277c1.902-1.902 2.847-4.093 2.847-6.566.001-2.476-.944-4.666-2.846-6.569z"
    />
  </svg>
</div>
```

Ok, so most of the text here is just the chevron's SVG. In actual logic we just have a couple of things:
- We display `Select an item` if there is no selected item and otherwise we show that item.
- We add an `active` class to the wrapper when the dropdown is open.
- We call `toggleDropdown` on click.

For reference here is the full file:

``` typescript
@Component({
  selector: 'ludan-dropdown',
  styleUrls: ['dropdown.component.scss'],
  template: `
    <div class="dropdown-container">
      <div
        class="selected-item"
        [ngClass]="{ active: dropdownActive }"
        (click)="toggleDropdown()"
      >
        <div [hidden]="!selectedItem">{{ selectedItem }}</div>
        <div [hidden]="selectedItem">Select an item</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 284.929 284.929"
          width="24px"
          height="24px"
          class="chevron"
        >
          <path
            fill="white"
            d="M282.082 195.285L149.028 62.24c-1.901-1.903-4.088-2.856-6.562-2.856s-4.665.953-6.567 2.856L2.856 195.285C.95 197.191 0 199.378 0 201.853c0 2.474.953 4.664 2.856 6.566l14.272 14.271c1.903 1.903 4.093 2.854 6.567 2.854s4.664-.951 6.567-2.854l112.204-112.202 112.208 112.209c1.902 1.903 4.093 2.848 6.563 2.848 2.478 0 4.668-.951 6.57-2.848l14.274-14.277c1.902-1.902 2.847-4.093 2.847-6.566.001-2.476-.944-4.666-2.846-6.569z"
          />
        </svg>
      </div>

      <div class="dropdown" [class.hidden]="!dropdownActive">
        <div
          *ngFor="
            let item of items | dropdownPipe: selectedItem;
            let last = last
          "
          class="item"
          [ngClass]="{ last: last }"
          (click)="selectItem(item)"
        >
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
  `
})
export class DropdownComponent {
  @Input() items: any[];
  @Input() selectedItem: any;
  @Input() dropdownActive = true;
  @Output() selectEvent = new EventEmitter();

  toggleDropdown = () => {
    this.dropdownActive = !this.dropdownActive;
  }

  selectItem = (item: any) => {
    this.dropdownActive = false;
    this.selectEvent.emit(item);
  }
}
```

To finish let's look at the styling:

### Dropdown's styling

``` scss
$primary: #e3875a;
$grey: #dddddd;

.dropdown-container {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  position: relative;

  .selected-item {
    background: $primary;
    height: 40px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    cursor: pointer;

    .chevron {
      user-select: none;
      transition: 300ms;
    }

    &.active {
      background: $primary;
      color: white;
      .chevron {
        transform: rotate(180deg);
      }
    }
  }

  .dropdown {
    &.hidden {
      border-bottom: none;
      .item {
        color: white;
        height: 0;
        border: none !important;
      }
    }

    overflow: hidden;
    position: absolute;
    top: 40px;
    width: calc(100% - 2px);
    left: 0;
    color: black;
    border: 1px solid $grey;

    .item {
      transition: 200ms;
      border-bottom: 1px solid $grey;
      padding: 0 10px;
      height: 40px;
      display: flex;
      align-items: center;

      cursor: pointer;
      &:hover {
        background: $grey;
      }

      &.last {
        border-bottom: 1px solid white;
        &:hover {
          border-bottom: 1px solid $grey;
        }
      }
    }
  }
}
```

I am not going to go in too many details here, have a look for yourself to how:
- I apply special styling to the last element of the list.
- Animate the chevron.
- Animate the dropdown list.

I think that's about it, Enjoy your new dropdown!