import { ModalService } from 'ngx-ludan-modal';
import { Component } from '@angular/core';

@Component({
  styleUrls: ['./library-modal.component.scss'],
  template: `
    <section class="library-modal">
      <h1>Modal</h1>
      <div class="demo-row">
        <p>Open a simple modal:</p>
        <button (click)="openModal()" class="ludan-button">open</button>
      </div>
      <div class="source-code-row">
        <p>Source code:</p>
        <a href="https://github.com/HoplaGeiss/ludan-modal"
          >https://github.com/HoplaGeiss/ludan-modal</a
        >
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
