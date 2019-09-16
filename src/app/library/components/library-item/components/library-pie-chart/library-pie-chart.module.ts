import { NgModule } from '@angular/core';
import { PieChartModule } from 'ngx-ludan-pie-chart';
import { LibraryPieChartComponent } from './library-pie-chart.component';

@NgModule({
  imports: [PieChartModule],
  declarations: [LibraryPieChartComponent],
  exports: [LibraryPieChartComponent]
})
export class LibraryPieChartModule {}
