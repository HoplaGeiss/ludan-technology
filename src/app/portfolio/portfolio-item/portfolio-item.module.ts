import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { PortfolioItemComponent } from './portfolio-item.component';

@NgModule({
  imports: [CommonModule, MarkdownModule.forChild()],
  declarations: [PortfolioItemComponent],
  exports: [PortfolioItemComponent]
})
export class PortfolioItemModule {}
