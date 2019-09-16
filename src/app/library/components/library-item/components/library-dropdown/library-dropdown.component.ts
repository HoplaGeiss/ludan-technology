import { Component } from '@angular/core';

@Component({
  styleUrls: ['library-dropdown.component.scss'],
  template: `
    <div class="wrapper">
      <ludan-dropdown
        [items]="items"
        (selectEvent)="selectItem($event)"
        [selectedItem]="selectedItem"
      ></ludan-dropdown>
    </div>
  `,
  styles: ['.wrapper { width: 400px }']
})
export class LibraryDropdownComponent {
  items = ['item 1', 'item 2', 'item 3', 'item 4'];
  selectedItem: any;

  selectItem = item => {
    this.selectedItem = item;
  };
}
