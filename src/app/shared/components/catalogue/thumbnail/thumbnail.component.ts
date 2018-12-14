import { Component, Input, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'ludan-thumbnail',
  styleUrls: ['thumbnail.component.scss'],
  template: `
    <!-- prettier-ignore -->
    <div
      class="thumbnail"
      [style.backgroundImage]="'url(assets/images/' + img + '.png)'"
      (mouseover)="hover = true"
      (mouseleave)="hover = false"
      [@scrollAnimation]="show ? 'show' : 'hide'
      ">
      <div *ngIf="hover" class="hover-container" (click)="clickEvent.emit($event)">
        <div class="hover-text-wrapper">
          <div class="title">{{ name }}</div>
          <div class="subtitle">View case study</div>
        </div>
      </div>
    </div>
  `,
  animations: [
    trigger('scrollAnimation', [
      state(
        'show',
        style({
          opacity: 1,
          transform: 'translateY(0)'
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          transform: 'translateY(60px)'
        })
      ),
      transition('show => hide', animate('300ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class ThumbnailComponent {
  hover: boolean;
  show = true;

  @Input() img: string;
  @Input() name: string;

  @Output() clickEvent = new EventEmitter();

  constructor(public elementRef: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.elementRef.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;

    if (scrollPosition + windowHeight - 200 >= componentPosition) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
}
