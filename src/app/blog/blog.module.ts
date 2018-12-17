import { NgModule } from '@angular/core';

import { BlogItemModule } from './blog-item/blog-item.module';
import { BlogPageModule } from './blog-page/blog-page.module';
import { BlogRoutingModule } from './blog.routing';

@NgModule({
  imports: [BlogRoutingModule, BlogItemModule, BlogPageModule]
})
export class BlogModule {}
