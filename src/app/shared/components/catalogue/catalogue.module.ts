import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CatalogueComponent } from './catalogue.component';
import { ThumbnailModule } from './thumbnail/thumbnail.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, ThumbnailModule, FlexLayoutModule],
  declarations: [CatalogueComponent],
  exports: [CatalogueComponent]
})
export class CatalogueModule {}
