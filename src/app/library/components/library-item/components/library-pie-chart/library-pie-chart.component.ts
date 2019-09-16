import { PieChartItem, GenerateDataService } from 'ngx-ludan-pie-chart';
import { Component, OnInit } from '@angular/core';

const AMPLITUDE = 100;

@Component({
  template: `
    <ludan-pie-chart [data]="data" [colours]="colours"></ludan-pie-chart>
  `
})
export class LibraryPieChartComponent implements OnInit {
  data: PieChartItem[];
  colours = ['#e3875a', '#e3655a', '#e3e15a'];
  names = ['Apples', 'Oranges', 'Grapes'];

  constructor(private generateDataService: GenerateDataService) {}

  ngOnInit() {
    this.data = this.generateDataService.generateData(AMPLITUDE, this.names);
    setInterval(() => {
      this.data = this.generateDataService.generateData(AMPLITUDE, this.names);
    }, 4000);
  }
}
