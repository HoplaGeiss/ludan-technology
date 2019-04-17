import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-ludan-modal';
import { LibraryModalComponent } from './library-modal.component';

@NgModule({
  imports: [ModalModule],
  declarations: [LibraryModalComponent],
  exports: [LibraryModalComponent]
})
export class LibraryModalModule {}
