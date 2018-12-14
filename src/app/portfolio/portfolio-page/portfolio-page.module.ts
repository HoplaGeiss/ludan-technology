import { NgModule } from '@angular/core';

import { CatalogueModule } from './../../shared/components/catalogue/catalogue.module';
import { PortfolioPageComponent } from './portfolio-page.component';

@NgModule({
  imports: [CatalogueModule],
  declarations: [PortfolioPageComponent],
  exports: [PortfolioPageComponent]
})
export class PortfolioPageModule {}
