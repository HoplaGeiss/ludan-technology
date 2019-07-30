import { NgModule } from '@angular/core';
import { NgxLudanSidebarModule } from 'ngx-ludan-sidebar';

import { LibrarySidebarComponent } from './library-sidebar.component';

@NgModule({
  imports: [NgxLudanSidebarModule],
  declarations: [LibrarySidebarComponent],
  exports: [LibrarySidebarComponent]
})
export class LibrarySidebarModule {}
