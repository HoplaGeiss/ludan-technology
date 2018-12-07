import { PortfolioRoutingModule } from './portfolio.routing';
import { NgModule } from '@angular/core';

import { PortfolioItemModule } from './portfolio-item/portfolio-item.module';
import { PortfolioPageModule } from './portfolio-page/portfolio-page.module';

@NgModule({
  imports: [PortfolioPageModule, PortfolioItemModule, PortfolioRoutingModule]
})
export class PortfolioModule {}
