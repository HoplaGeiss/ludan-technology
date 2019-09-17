import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CatalogueItem } from './../../models/catalogue-item.model';

@Component({
  selector: 'ludan-catalogue',
  styleUrls: ['catalogue.component.scss'],
  template: `
    <div class="catalogue">
      <ludan-thumbnail
        *ngFor="let catalogueItem of catalogueItems"
        (clickEvent)="selectEvent.emit(catalogueItem)"
        [name]="catalogueItem.label"
        [img]="catalogueItem.img"
      ></ludan-thumbnail>
      <div *ngFor="let hiddenElement of hiddenElements" class="hidden-elements"></div>
    </div>
  `
})
export class CatalogueComponent {
  hiddenElements = ['', '', '', '', ''];

  @Input() catalogueItems: CatalogueItem[];

  @Output() selectEvent = new EventEmitter();
}
