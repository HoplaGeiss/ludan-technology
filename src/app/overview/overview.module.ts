import { NgModule } from '@angular/core';

import { CatalogueModule } from './../shared/components/catalogue/catalogue.module';
import { SkillsComponent } from './components/skills/skills.component';
import { OverviewComponent } from './overview.component';
import { OverviewRoutingModule } from './overview.routing';

@NgModule({
  imports: [OverviewRoutingModule, CatalogueModule],
  declarations: [OverviewComponent, SkillsComponent],
  exports: [OverviewComponent]
})
export class OverviewModule {}
