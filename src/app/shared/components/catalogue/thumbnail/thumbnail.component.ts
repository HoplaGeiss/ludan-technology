import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
@Component({
  selector: 'ludan-thumbnail',
  styleUrls: ['thumbnail.component.scss'],
  template: `
    <figure class="thumbnail">
      <div>
        <img
          defaultImage="assets/images/default.WebP"
          [lazyLoad]="'assets/images/' + img"
        />
        <figcaption class="hover-container" (click)="clickEvent.emit($event)">
          <div class="hover-container__background"></div>
          <div class="hover-container__content">
            <p class="title">{{ name }}</p>
            <p class="subtitle">View case study</p>
          </div>
        </figcaption>
      </div>
    </figure>
  `
})
export class ThumbnailComponent {
  @Input() img: string;
  @Input() name: string;

  @Output() clickEvent = new EventEmitter();
}
