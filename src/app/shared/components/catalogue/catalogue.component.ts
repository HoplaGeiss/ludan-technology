import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CatalogueItem } from './../../models/catalogue-item.model';

@Component({
  selector: 'ludan-catalogue',
  styleUrls: ['catalogue.component.scss'],
  template: `
    <div class="catalogue" fxLayout="row wrap" fxLayoutAlign="center">
      <ludan-thumbnail
        fxFlex.lt-md="100%"
        fxFlex.gt-sm="50%"
        *ngFor="let catalogueItem of catalogueItems"
        (clickEvent)="selectEvent.emit(catalogueItem)"
        [name]="catalogueItem.label"
        [img]="catalogueItem.img"
      ></ludan-thumbnail>
    </div>
  `
})
export class CatalogueComponent {
  @Input() catalogueItems: CatalogueItem[];

  @Output() selectEvent = new EventEmitter();
}
