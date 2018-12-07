import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PortfolioItem } from '../shared/models/portfolio-item.model';
import { PortfolioService } from '../shared/services/portfolio.service';

@Component({
  selector: 'ludan-overview',
  styleUrls: ['./overview.component.scss'],
  template: `
    <h1>overview</h1>
    <div class="catalogue-wrapper">
      <ludan-catalogue [portfolioItems]="portfolioItems" (selectEvent)="selectPortfolioItem($event)"></ludan-catalogue>
    </div>
  `
})
export class OverviewComponent implements OnInit {
  public portfolioItems: PortfolioItem[];

  constructor(private portfolioService: PortfolioService, private router: Router) {}

  ngOnInit() {
    this.portfolioItems = this.portfolioService.portfolioItemsSubject.getValue();
  }

  selectPortfolioItem = (portfolioItem: PortfolioItem) => {
    this.router.navigate([`/portfolio/${portfolioItem.id}`]);
  };
}
