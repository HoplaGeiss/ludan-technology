import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface NavbarItemInterface {
  label: string;
  name?: string;
}

@Component({
  selector: 'ludan-navbar',
  styleUrls: ['navbar.component.scss'],
  template: `
    <ul class="ludan-navbar">
      <li *ngFor="let item of items" (click)="selectItem(item)" [class.active]="item === selectedItem">
        {{ item.label }}
      </li>
    </ul>
  `
})
export class NavbarComponent {
  @Input() items: NavbarItemInterface[];
  @Input() selectedItem: NavbarItemInterface;

  @Output() selectEvent = new EventEmitter();

  selectItem = item => {
    if (item !== this.selectedItem) this.selectEvent.emit(item);
  };
}
