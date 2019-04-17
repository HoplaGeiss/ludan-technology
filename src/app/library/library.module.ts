import { NgModule } from '@angular/core';

import { LibraryItemsModule } from './components/library-items/library-items.module';
import { LibraryListModule } from './components/library-list/library-list.module';
import { LibraryComponent } from './library.component';
import { LibraryRoutingModule } from './library.routing';

@NgModule({
  imports: [LibraryRoutingModule, LibraryListModule, LibraryItemsModule],
  declarations: [LibraryComponent],
  exports: [LibraryComponent]
})
export class LibraryModule {}
