import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ludan-thumbnail',
  styleUrls: ['thumbnail.component.scss'],
  template: `
    <div
      class="thumbnail"
      [style.backgroundImage]="'url(' + img + ')'"
      (mouseover)="hover = true"
      (mouseleave)="hover = false"
    >
      <div *ngIf="hover" class="hover-container" (click)="clickEvent.emit($event)">
        <div class="hover-text-wrapper">
          <div class="title">{{ name }}</div>
          <div class="subtitle">View case study</div>
        </div>
      </div>
    </div>
  `
})
export class ThumbnailComponent {
  hover: boolean;

  @Input() img: string;
  @Input() name: string;

  @Output() clickEvent = new EventEmitter();
}
