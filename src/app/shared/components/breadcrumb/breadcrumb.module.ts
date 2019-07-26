import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TitleCasePipe } from '../../pipes/titleCase.pipe';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [BreadcrumbComponent, TitleCasePipe],
  exports: [BreadcrumbComponent]
})
export class BreadcrumbModule {}
