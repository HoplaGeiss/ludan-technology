import { NgModule } from '@angular/core';

import { LibraryItemModule } from './components/library-items/library-item.module';
import { LibraryListModule } from './components/library-list/library-list.module';
import { LibraryComponent } from './library.component';
import { LibraryRoutingModule } from './library.routing';

@NgModule({
  imports: [LibraryRoutingModule, LibraryListModule, LibraryItemModule],
  declarations: [LibraryComponent],
  exports: [LibraryComponent]
})
export class LibraryModule {}
