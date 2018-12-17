import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogItemComponent } from './blog-item/blog-item.component';
import { BlogPageComponent } from './blog-page/blog-page.component';

const routes: Routes = [
  {
    path: '',
    component: BlogPageComponent
  },
  {
    path: ':id',
    component: BlogItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
