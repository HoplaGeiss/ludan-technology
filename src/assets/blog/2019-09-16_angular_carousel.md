In this blog post, I am going to show you how to build a Carousel using angular.

Source code: [https://github.com/HoplaGeiss/ludan-carousel](https://github.com/HoplaGeiss/ludan-carousel)

Demo: [https://ludan.io/library/carousel](https://ludan.io/library/carousel)

We want to be able to pass any type of items to our carousel. Let's have a look at the parent component calling the carousel.

### Carousel Parent Component

``` typescript
<ludan-carousel>
  <ludan-carousel-item *ngFor="let item of items">
    <div
      class="arrow"
      (click)="selectItem(item)"
      [class.active]="item.active"
    >
      <div class="text">{{ item.title }}</div>
    </div>
  </ludan-carousel-item>
</ludan-carousel>
```

I am using a carousel item to encapsulate the items in our carousel. For simplicity, all the elements here are the same.

Let's now have a look at that `ludan-carousel-item` component.

### Carousel Item Component

``` typescript
@Component({
  selector: 'ludan-carousel-item',
  styleUrls: ['carousel-item.component.scss'],
  template: `
    <ng-template #carouselItem>
      <ng-content></ng-content>
    </ng-template>
  `
})
export class CarouselItemComponent {
  constructor(private carousel: CarouselComponent) {
    this.carousel.addItem(this);
  }
  @ViewChild('carouselItem', { static: false }) carouselItem: any;
}
```

It's a very simple component that simply passes down everything it receives through `ng-content`.
There is a few subtilities though, we use `ViewChild` to keep a reference of the html element and we also call the parent's `CarouselComponent.addItem` in the constructor to register that item.

All that remains now is the carousel component.

### Carousel Component

``` typescript
<div class="wrapper" (window:resize)="onResize()">
  <div class="carousel-wrapper">
    <div class="carousel">
      <ul>
        <li
          *ngFor="let item of items; let i = index"
          (click)="translateToItem(i)"
        >
          <ng-container
            *ngTemplateOutlet="item.carouselItem"
          ></ng-container>
        </li>
      </ul>
    </div>
  </div>

  <div
    *ngIf="slideNumber > 1"
    class="arrow-left"
    (click)="slideLeft()"
    [class.disabled]="translation === 0"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 477.175 477.175"
      width="22px"
      height="22px"
      class="icon"
    >
      <path
        d="M145.188
      238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1
      225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3
      9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z"
      />
    </svg>
  </div>

  <div
    *ngIf="slideNumber > 1"
    class="arrow-right"
    (click)="slideRight()"
    [class.disabled]="currentSlide === slideNumber - 1"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 129 129"
      width="22px"
      height="22px"
      class="icon"
    >
      <path
        d="M40.4
      121.3c-.8.8-1.8 1.2-2.9 1.2s-2.1-.4-2.9-1.2c-1.6-1.6-1.6-4.2
      0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8 0l53.9
      53.9c1.6 1.6 1.6 4.2 0 5.8l-53.9 53.9z"
      />
    </svg>
  </div>
</div>
```

There are 2 distinct parts to that template. The carousel with the list of items and the two navigation arrows.

**Carousel**

The carousel is just a list of `carouselItem`. We are passing the `carouselItem` thanks to `ngTemplateOutlet` and the reference to `carouselItem` that we saved in `item.carouselItem`.

**Arrows**

The arrows are SVGs with some custom styling in function of their state.

``` typescript
items: CarouselItemComponent[] = [];
currentSlide = 0;
carousel: HTMLElement;
translation = 0;
elementsPerSlide: number;
slideNumber: number;
carouselWrapper: HTMLElement;
carouselWrapperWidth: number;

constructor(
  private elementRef: ElementRef,
  private changeDetectorRef: ChangeDetectorRef
) {}

ngOnInit() {
  this.carousel = this.elementRef.nativeElement.querySelector('.carousel');
  this.carouselWrapper = this.elementRef.nativeElement.querySelector(
    '.carousel-wrapper'
  );
}

addItem(item: CarouselItemComponent): void {
  this.items.push(item);
}

renderBatches = () => {
  this.elementsPerSlide = Math.floor(this.carouselWrapperWidth / ITEM_WIDTH);
  this.slideNumber = Math.ceil(this.items.length / this.elementsPerSlide);

  // The carousel is 100 * ng batches wide
  this.carousel.style.width = 100 * this.slideNumber + '%';
  this.increment = 100 / this.slideNumber;
  this.changeDetectorRef.detectChanges();
}

onResize = () => {
  // Just the fact of having this, forces ngAfterViewChecked to run
}

// On size changes, recalculate the bacthes
ngAfterViewChecked() {
  if (
    this.carouselWrapper.offsetWidth !== 0 &&
    this.carouselWrapper.offsetWidth !== this.carouselWrapperWidth
  ) {
    this.carouselWrapperWidth =
      this.carouselWrapper.offsetWidth - 2 * ICON_WIDTH;

    this.renderBatches();
  }
}

slideLeft = () => {
  this.slide(1);
}

slideRight = () => {
  if (this.currentSlide !== this.slideNumber - 1) this.slide(-1);
}

slide = (direction: number) => {
  this.currentSlide = this.currentSlide - direction;
  if (this.currentSlide < 0) this.currentSlide = 0;
  this.translation = -this.currentSlide * this.elementsPerSlide * ITEM_WIDTH;
  this.carousel.style.transform = 'translateX(' + this.translation + 'px)';
}

translateToItem = (index: number) => {
  this.translation = -(index * ITEM_WIDTH);
  this.currentSlide = Math.floor(index / this.elementsPerSlide);
  this.carousel.style.transform = 'translateX(' + this.translation + 'px)';
}
```

**Attributes**:

To understand the name of the attributes, you need to imagine that the carousel is divided into several 'slides'. At first, the slide 0 is visible and the rest are hidden. Then when the user clicks on the right arrow for the first time, slide 1 comes into view and slide 0 is hidden.

- items - List of CarouselItemComponent.
- currentSlide - Active slide.
- carousel - Carousel HTML element.
- translation - Number tracking the current translation applied to the carousel inner wrapper.
- elementsPerSlide - Number of elements per slides.
- slideNumber - Total number of slides.
- carouselWrapper - Carousel wrapper HTML element.
- carouselWrapperWidth - Width of the `carouselWrapper`.

**Methods**:

- ngOnInit - Sets `carouselWrapper` and `carousel`.
- addItem - Saved the CarouselItemComponent in an array.
- renderBatches - Calculates `elementsPerSlide`, `slideNumber`, and sets the carousel's width.
- ngAfterViewChecked - Checks if the carouselWrapper's width has changed and recalls `renderBatches` if it's the case.
- slideLeft - Slide the carousel to the left.
- slideRight - Slides the carousel to the right.
- slide - sets `currentSlide` and `translation` and applies a translate transformation to `carousel`.
- translateToItem - same as `translateToItem` but instead of translating a whole slide it just moves it to the selected item's x position.

That's it enjoy your new Angular carousel!