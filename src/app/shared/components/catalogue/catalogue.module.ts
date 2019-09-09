import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CatalogueComponent } from './catalogue.component';
import { ThumbnailModule } from './thumbnail/thumbnail.module';

@NgModule({
  imports: [CommonModule, ThumbnailModule],
  declarations: [CatalogueComponent],
  exports: [CatalogueComponent]
})
export class CatalogueModule {}
