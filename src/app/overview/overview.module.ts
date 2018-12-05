import { NgModule } from '@angular/core';

import { OverviewComponent } from './overview.component';
import { OverviewRoutingModule } from './overview.routing';

@NgModule({
  imports: [OverviewRoutingModule],
  declarations: [OverviewComponent],
  exports: [OverviewComponent]
})
export class OverviewModule {}
