import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CatalogueModule } from './../shared/components/catalogue/catalogue.module';
import { OverviewComponent } from './overview.component';
import { OverviewRoutingModule } from './overview.routing';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  imports: [OverviewRoutingModule, CatalogueModule, FlexLayoutModule],
  declarations: [OverviewComponent, SkillsComponent],
  exports: [OverviewComponent]
})
export class OverviewModule {}
