import { Component } from '@angular/core';

@Component({
  template: `
    <ludan-accordion>
      <ludan-accordion-group *ngFor="let i of groups" [index]="i" [isOpen]="i === 0">
        <div class="header">Header {{ i }}</div>
        <div class="body">
          Cupidatat non in elit voluptate enim exercitation amet. Duis anim laborum et sit
          veniam. Fugiat sit sunt enim aliqua reprehenderit proident labore adipisicing
          quis laborum proident. Dolor proident esse sunt incididunt qui nostrud nulla
          officia. Non cillum sint voluptate irure nulla ea anim nostrud aliqua quis
          incididunt. Adipisicing sint cillum magna quis quis velit occaecat ullamco id
          duis cillum do.
        </div>
      </ludan-accordion-group>
    </ludan-accordion>
  `
})
export class LibraryAccordionComponent {
  groups = [0, 1, 2, 3, 4];
}
