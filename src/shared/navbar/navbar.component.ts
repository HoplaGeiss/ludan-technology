import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() items: { label: string }[];
  @Input() selectedItem: { label: string };

  @Output() selectEvent = new EventEmitter();

  selectItem = item => {
    if (item !== this.selectedItem) this.selectEvent.emit(item);
  };
}
