import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioPageComponent
  },
  {
    path: ':id',
    component: PortfolioItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule {}
