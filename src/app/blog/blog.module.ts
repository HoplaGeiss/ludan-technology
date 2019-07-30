import { BlogListModule } from './blog-list/blog-list.module';
import { BlogComponent } from './blog.component';
import { NgModule } from '@angular/core';

import { BlogItemModule } from './blog-item/blog-item.module';
import { BlogRoutingModule } from './blog.routing';

@NgModule({
  imports: [BlogRoutingModule, BlogItemModule, BlogListModule],
  declarations: [BlogComponent],
  exports: [BlogComponent]
})
export class BlogModule {}
