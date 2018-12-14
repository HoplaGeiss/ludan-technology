import { NgModule } from '@angular/core';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact.routing';

@NgModule({
  imports: [ContactRoutingModule],
  declarations: [ContactComponent],
  exports: [ContactComponent]
})
export class ContactModule {}
