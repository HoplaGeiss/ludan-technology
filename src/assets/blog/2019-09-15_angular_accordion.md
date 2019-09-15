In this blog post, we are going to develop an accordion using Angular 8.

Source code: [https://github.com/HoplaGeiss/ludan-accordion](https://github.com/HoplaGeiss/ludan-accordion)

Demo: [https://ludan.io/library/accordion](https://ludan.io/library/accordion)

We are going to build the accordion in such a way that we can pass it any elements.

Let's first have a look at its parent element.

### Accordion Parent Element

``` typescript
<ludan-accordion>
  <ludan-accordion-group *ngFor="let i of groups" [index]="i" [isOpen]='i === 0'>
    <div class="header">Header {{ i }}</div>
    <div class="body">
      Cupidatat non in elit voluptate enim exercitation amet. Duis anim
      laborum et sit veniam. Fugiat sit sunt enim aliqua reprehenderit
      proident labore adipisicing quis laborum proident. Dolor proident esse
      sunt incididunt qui nostrud nulla officia. Non cillum sint voluptate
      irure nulla ea anim nostrud aliqua quis incididunt. Adipisicing sint
      cillum magna quis quis velit occaecat ullamco id duis cillum do.
    </div>
  </ludan-accordion-group>
</ludan-accordion>
```

In order to be able to pass any type of header and body to the accordion items, we need to define a `ludan-accordion-group` component. This component takes as children two elements, one header and one body.

Let's have a look at that group element.

### Accordion Group Element

``` typescript
<div
  class="accordion-group"
  [ngClass]="{ closed: !isOpen, first: index === 0 }"
>
  <div class="panel-heading" (click)="toggleOpen()">
    <ng-content select=".header"></ng-content>
  </div>
  <div class="panel-collapse">
    <div class="panel-body">
      <ng-content select=".body"></ng-content>
    </div>
  </div>
</div>
```

The template is straightforward, a wrapper with a conditional closed class and two children elements for the heading and the body.

``` typescript
@Input() heading: string;
@Input() isOpen: boolean;
@Input() index: number;

constructor(private accordion: AccordionComponent) {
  this.accordion.addGroup(this);
}

toggleOpen(): void {
    if (!this.isOpen) {
      this.isOpen = true;
      this.accordion.closeOthers(this);
    } else {
      this.isOpen = false;
    }
  }
```

Let's have a more detailed look at the attributes and methods.

**Attributes**:
- isOpen - boolean driving the state of the item.
- index - id keeping track of the item.

**Methods**:
- constructor - calls `accordion.addGroup` to register this group in the parent accordion component.
- toggleOpen - opens the item and closes the others or closes the open item.

Let's have a look a the accordion component.

### Accordion Component

``` typescript
<div class="accordion">
  <ng-content></ng-content>
</div>
```

The template is dead easy, we just display whatever is passed as children.

``` typescript
groups: Array<AccordionGroupComponent> = [];

addGroup(group: AccordionGroupComponent): void {
  this.groups.push(group);
}

closeOthers(openGroup: AccordionGroupComponent): void {
  this.groups.forEach((group: AccordionGroupComponent) => {
    if (group !== openGroup) {
      group.isOpen = false;
    }
  });
}
```

Let's study the attributes and methods.

**Attributes**:
- groups - keeps track of the children groups.

**Methods**:
- addGroup - Register the groups.
- closeOthers - Closes all items apart from the open one.

To finish let's have a look at the styling.

### Accordion styling

``` scss
.accordion-group {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;

  &:not(.first) {
    .panel-heading {
      border-top: 1px solid #e8e8e8;
    }
  }

  &.closed {
    .panel-collapse {
      max-height: 0;
    }
  }

  &:not(.closed) {
    .panel-heading {
      border-bottom: 1px solid #e8e8e8;
    }
  }

  .panel-heading {
    cursor: pointer;
    background-color: #e3875a;
    padding: 5px;
    color: white;
  }

  .panel-collapse {
    transition-property: all;
    transition: 0.3s ease;
    overflow-y: hidden;
    max-height: 400px;

    .panel-body {
      padding: 5px;
    }
  }
}
```

The only thing worth mentioning is the height animation. We are using the `closed` class and changing the `max-height` to get a smooth transition.

That's it! Enjoy your Angular Accordion.