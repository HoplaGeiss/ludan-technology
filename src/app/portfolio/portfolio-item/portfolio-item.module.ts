import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { PortfolioItemComponent } from './portfolio-item.component';

@NgModule({
  imports: [MarkdownModule.forChild()],
  declarations: [PortfolioItemComponent],
  exports: [PortfolioItemComponent]
})
export class PortfolioItemModule {}
