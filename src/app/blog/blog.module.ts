import { NgModule } from '@angular/core';

import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog.routing';

@NgModule({
  imports: [BlogRoutingModule],
  declarations: [BlogComponent],
  exports: [BlogComponent]
})
export class BlogModule {}
