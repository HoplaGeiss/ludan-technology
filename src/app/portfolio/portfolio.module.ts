import { NgModule } from '@angular/core';

import { CatalogueModule } from './../shared/components/catalogue/catalogue.module';
import { PortfolioItemModule } from './portfolio-item/portfolio-item.module';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioRoutingModule } from './portfolio.routing';

@NgModule({
  imports: [CatalogueModule, PortfolioItemModule, PortfolioRoutingModule],
  declarations: [PortfolioComponent],
  exports: [PortfolioComponent]
})
export class PortfolioModule {}
