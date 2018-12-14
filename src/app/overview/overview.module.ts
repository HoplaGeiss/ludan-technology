import { CatalogueModule } from './../shared/components/catalogue/catalogue.module';
import { NgModule } from '@angular/core';

import { OverviewComponent } from './overview.component';
import { OverviewRoutingModule } from './overview.routing';

@NgModule({
  imports: [OverviewRoutingModule, CatalogueModule],
  declarations: [OverviewComponent],
  exports: [OverviewComponent]
})
export class OverviewModule {}
