import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PortfolioItem } from '../../models/portfolio-item.model';

@Component({
  selector: 'ludan-catalogue',
  styleUrls: ['catalogue.component.scss'],
  template: `
    <div class="catalogue" fxLayout="row wrap" fxLayoutAlign="center">
      <ludan-thumbnail
        fxFlex.lt-md="100%"
        fxFlex.gt-sm="50%"
        *ngFor="let portfolioItem of portfolioItems"
        [name]="portfolioItem.label"
        [img]="portfolioItem.img"
        (clickEvent)="selectEvent.emit(portfolioItem)"
      ></ludan-thumbnail>
    </div>
  `
})
export class CatalogueComponent {
  @Input() portfolioItems: PortfolioItem[];

  @Output() selectEvent = new EventEmitter();
}
