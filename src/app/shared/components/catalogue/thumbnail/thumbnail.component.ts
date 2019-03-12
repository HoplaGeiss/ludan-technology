import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'ludan-thumbnail',
  styleUrls: ['thumbnail.component.scss'],
  template: `
    <figure class="thumbnail">
      <div>
        <img [src]="'assets/images/' + img + '.png'" />
        <figcaption class="hover-container" (click)="clickEvent.emit($event)">
          <div class="hover-text-wrapper">
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
