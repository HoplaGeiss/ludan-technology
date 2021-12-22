import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
@Component({
  selector: 'ludan-thumbnail',
  styleUrls: ['thumbnail.component.scss'],
  template: `
    <figure class="thumbnail" (click)="clickEvent.emit()">
      <img
        class="image"
        *ngIf="!seeMore"
        defaultImage="assets/images/default.WebP"
        [lazyLoad]="'assets/images/' + img"
      />
      <div class="plop" *ngIf="seeMore"></div>
      <div class="hover-background"></div>
      <div class="sloped-edge"></div>
      <div class="figcaption">
        <figcaption>{{ name }}</figcaption>
      </div>
    </figure>
  `,
})
export class ThumbnailComponent {
  @Input() seeMore: boolean;
  @Input() img: string;
  @Input() name: string;

  @Output() clickEvent = new EventEmitter();
}
