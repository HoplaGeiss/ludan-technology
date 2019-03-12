import { CatalogueModule } from './../shared/components/catalogue/catalogue.module';
import { BlogComponent } from './blog.component';
import { NgModule } from '@angular/core';

import { BlogItemModule } from './blog-item/blog-item.module';
import { BlogRoutingModule } from './blog.routing';

@NgModule({
  imports: [BlogRoutingModule, BlogItemModule, CatalogueModule],
  declarations: [BlogComponent],
  exports: [BlogComponent]
})
export class BlogModule {}
