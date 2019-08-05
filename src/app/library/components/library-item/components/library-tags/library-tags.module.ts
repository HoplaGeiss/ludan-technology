import { NgModule } from '@angular/core';
import { TagsModule } from 'ngx-ludan-tags';

import { LibraryTagsComponent } from './library-tags.component';

@NgModule({
  imports: [TagsModule],
  declarations: [LibraryTagsComponent],
  exports: [LibraryTagsComponent]
})
export class LibraryTagsModule {}
