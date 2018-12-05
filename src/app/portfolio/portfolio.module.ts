import { NgModule } from '@angular/core';

import { PortfolioComponent } from './portfolio.component';
import { PortfolioRoutingModule } from './portfolio.routing';

@NgModule({
  imports: [PortfolioRoutingModule],
  declarations: [PortfolioComponent],
  exports: [PortfolioComponent]
})
export class PortfolioModule {}
