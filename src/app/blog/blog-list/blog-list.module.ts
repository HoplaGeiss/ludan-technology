import { CatalogueModule } from './../../shared/components/catalogue/catalogue.module';
import { NgModule } from '@angular/core';
import { BlogListComponent } from './blog-list.component';

@NgModule({
  imports: [CatalogueModule],
  declarations: [BlogListComponent],
  exports: [BlogListComponent]
})
export class BlogListModule {}
