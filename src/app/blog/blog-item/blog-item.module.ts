import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { BlogItemComponent } from './blog-item.component';

@NgModule({
  imports: [CommonModule, MarkdownModule.forChild()],
  declarations: [BlogItemComponent],
  exports: [BlogItemComponent]
})
export class BlogItemModule {}
