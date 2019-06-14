import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [CommonModule, RouterModule, FlexLayoutModule, BrowserAnimationsModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule {}
