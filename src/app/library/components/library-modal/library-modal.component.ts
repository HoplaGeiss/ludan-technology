import { ModalService } from 'ngx-ludan-modal';
import { Component } from '@angular/core';

@Component({
  styleUrls: ['./library-modal.component.scss'],
  template: `
    <section class="library-modal">
      <h1>Modal</h1>
      <div class="library-item__description">
        <p>
          Modals are some of the most useful components for web development. It pays off
          to develop a simple re-usable components. In this example I am using angular
          transclusion, to pass in some custom html elements for the body and the footer.
          That allows for maximum modularity and re-usability. Have a look at the source
          code for more details:
        </p>
        <a href="https://github.com/HoplaGeiss/ludan-modal"
          >https://github.com/HoplaGeiss/ludan-modal</a
        >
        <div class="separator"></div>
      </div>
      <div class="demo-row">
        <p>Open a simple modal:</p>
        <button (click)="openModal()" class="ludan-button">open</button>
      </div>
      <ludan-modal [modalId]="'modalId'" [modalTitle]="'Title'">
        <div class="body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit eaque, ratione hic
          facere quasi facilis qui unde odio quo ut fugiat, voluptatem dolor, minima, ea
          perferendis expedita maxime ipsum atque.
        </div>
        <div class="footer">Custom footer</div>
      </ludan-modal>
    </section>
  `
})
export class LibraryModalComponent {
  constructor(private modalService: ModalService) {}

  openModal = () => {
    this.modalService.open('modalId');
  };
}
