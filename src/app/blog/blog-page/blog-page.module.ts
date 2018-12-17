import { NgModule } from '@angular/core';

import { CatalogueModule } from './../../shared/components/catalogue/catalogue.module';
import { BlogPageComponent } from './blog-page.component';

@NgModule({
  imports: [CatalogueModule],
  declarations: [BlogPageComponent],
  exports: [BlogPageComponent]
})
export class BlogPageModule {}
