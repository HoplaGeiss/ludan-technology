import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <ludan-tags [items]="filteredItems" (closeEvent)="removeItem($event)"></ludan-tags>
  `
})
export class LibraryTagsComponent implements OnInit {
  initialItems = [
    { label: 'Football' },
    { label: 'Basketball' },
    { label: 'Tennis' },
    { label: 'Dancing' },
    { label: 'Skying' }
  ];
  filteredItems = [];

  ngOnInit() {
    this.filteredItems = this.initialItems.slice();
  }

  removeItem = item => {
    this.filteredItems.splice(this.filteredItems.indexOf(item), 1);
  };
}
