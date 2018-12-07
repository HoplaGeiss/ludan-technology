import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as _ from 'underscore';

import { NavbarItemInterface } from './shared/components/navbar/navbar.component';
import { PortfolioService } from './shared/services/portfolio.service';

@Component({
  selector: 'ludan-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <ludan-navbar
      [items]="navbarItems"
      [selectedItem]="selectedNavbarItem"
      (selectEvent)="navigate($event)"
    ></ludan-navbar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<boolean>();

  public navbarItems: NavbarItemInterface[];
  public selectedNavbarItem: NavbarItemInterface;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private portfolioService: PortfolioService
  ) {}

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit() {
    this.navbarItems = [
      { label: 'Portfolio', name: 'portfolio' },
      { label: 'Blog', name: 'blog' },
      { label: 'Contact', name: 'contact' }
    ];

    // On Init we need to call select tab on the router url directly, as the events have already been fired.
    this.selectItem(this.router.url);

    this.router.events.pipe(takeUntil(this.destroy$)).subscribe(route => {
      if (route instanceof NavigationEnd) this.selectItem(route.url);
    });

    this.portfolioService.portfolioItemsSubject.next([
      { id: '1', name: 'example', label: 'Example 1', img: 'assets/default.png' },
      { id: '2', name: 'example2', label: 'Example 2', img: 'assets/default.png' },
      { id: '3', name: 'example3', label: 'Example 3', img: 'assets/default.png' },
      { id: '4', name: 'example4', label: 'Example 4', img: 'assets/default.png' }
    ]);
  }

  navigate = tab => {
    this.router.navigate(['./' + tab.name], {
      relativeTo: this.activatedRoute
    });
  };

  private selectItem = (url: string) => {
    const itemName = url.split('/').pop();
    const item = _.find(this.navbarItems, navbarItem => navbarItem.name === itemName);
    if (item) this.selectedNavbarItem = item;
  };
}
