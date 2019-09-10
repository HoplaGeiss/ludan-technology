import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
@Component({
  selector: 'ludan-thumbnail',
  styleUrls: ['thumbnail.component.scss'],
  template: `
    <figure class="thumbnail" (click)="clickEvent.emit()">
      <img
        class="image"
        defaultImage="assets/images/default.WebP"
        [lazyLoad]="'assets/images/' + img"
      />
      <div class="hover-background"></div>
      <div class="sloped-edge"></div>
      <div class="figcaption">
        <figcaption>{{ name }}</figcaption>
      </div>
    </figure>
  `
})
export class ThumbnailComponent {
  @Input() img: string;
  @Input() name: string;

  @Output() clickEvent = new EventEmitter();
}
