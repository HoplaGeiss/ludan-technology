import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { DisqusModule } from 'ngx-disqus';

import { BlogItemComponent } from './blog-item.component';

@NgModule({
  imports: [CommonModule, MarkdownModule.forChild(), LazyLoadImageModule, DisqusModule],
  declarations: [BlogItemComponent],
  exports: [BlogItemComponent]
})
export class BlogItemModule {}
