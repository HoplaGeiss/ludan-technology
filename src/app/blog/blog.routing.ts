import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogItemComponent } from './blog-item/blog-item.component';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent
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
