import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CatalogueComponent } from './catalogue.component';
import { ThumbnailModule } from './thumbnail/thumbnail.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DeferLoadModule } from '@trademe/ng-defer-load';

@NgModule({
  imports: [CommonModule, ThumbnailModule, FlexLayoutModule, DeferLoadModule],
  declarations: [CatalogueComponent],
  exports: [CatalogueComponent]
})
export class CatalogueModule {}
