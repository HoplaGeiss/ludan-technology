import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ThumbnailInterface } from '../../models/thumnail.model';

@Component({
  selector: 'ludan-catalogue',
  styleUrls: ['catalogue.component.scss'],
  template: `
    <div class="catalogue" fxLayout="row wrap" fxLayoutAlign="center">
      <ludan-thumbnail
        fxFlex.lt-md="100%"
        fxFlex.gt-sm="50%"
        *ngFor="let thumbnail of thumbnails"
        [name]="thumbnail.name"
        [img]="thumbnail.img"
        (clickEvent)="selectEvent.emit(thumbnail)"
      ></ludan-thumbnail>
    </div>
  `
})
export class CatalogueComponent {
  @Input() thumbnails: ThumbnailInterface[];

  @Output() selectEvent = new EventEmitter();
}
