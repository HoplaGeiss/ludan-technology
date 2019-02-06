import { ModalService } from 'ngx-ludan-modal';
import { Component } from '@angular/core';

@Component({
  styleUrls: ['./library-modal.component.scss'],
  template: `
    <button (click)="openModal()">open</button>
    <ludan-modal [modalId]="'modalId'" [modalTitle]="'Title'">
      <div class="body">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit eaque, ratione hic facere quasi facilis qui unde
          odio quo ut fugiat, voluptatem dolor, minima, ea perferendis expedita maxime ipsum atque.
        </div>
      </div>
      <div class="footer">Custom footer</div>
    </ludan-modal>
  `
})
export class LibraryModalComponent {
  constructor(private modalService: ModalService) {}

  openModal = () => {
    this.modalService.open('modalId');
  };
}
