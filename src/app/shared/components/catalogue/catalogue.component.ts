import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CatalogueItem } from './../../models/catalogue-item.model';

@Component({
  selector: 'ludan-catalogue',
  styleUrls: ['catalogue.component.scss'],
  template: `
    <div class="catalogue" fxLayout="row wrap" fxLayoutAlign="center">
      <div
        (deferLoad)="showMyElement = true"
        fxFlex.lt-md="100%"
        fxFlex.gt-sm="50%"
        *ngFor="let catalogueItem of catalogueItems; let i = index"
        (clickEvent)="selectEvent.emit(catalogueItem)"
      >
        <ludan-thumbnail
          *ngIf="showMyElement"
          [name]="catalogueItem.label"
          [img]="catalogueItem.img"
        ></ludan-thumbnail>
      </div>
    </div>
  `
})
export class CatalogueComponent {
  @Input() catalogueItems: CatalogueItem[];

  @Output() selectEvent = new EventEmitter();
}
