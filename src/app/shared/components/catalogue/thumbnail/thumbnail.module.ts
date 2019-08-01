import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { ThumbnailComponent } from './thumbnail.component';

@NgModule({
  imports: [CommonModule, LazyLoadImageModule],
  declarations: [ThumbnailComponent],
  exports: [ThumbnailComponent]
})
export class ThumbnailModule {}
