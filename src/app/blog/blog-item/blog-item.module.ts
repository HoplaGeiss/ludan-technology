import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { BlogItemComponent } from './blog-item.component';

@NgModule({
  imports: [CommonModule, MarkdownModule.forChild(), LazyLoadImageModule],
  declarations: [BlogItemComponent],
  exports: [BlogItemComponent]
})
export class BlogItemModule {}
