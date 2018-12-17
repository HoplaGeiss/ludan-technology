import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as _ from 'underscore';

import { NavbarItemInterface } from './shared/components/navbar/navbar.component';
import { StoreService } from './shared/services/store.service';

@Component({
  selector: 'ludan-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div class="header">
      <img src="assets/images/logo.png" routerLink="/" />
      <ludan-navbar
        [items]="navbarItems"
        [selectedItem]="selectedNavbarItem"
        (selectEvent)="navigate($event)"
      ></ludan-navbar>
    </div>
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<boolean>();

  public navbarItems: NavbarItemInterface[];
  public selectedNavbarItem: NavbarItemInterface;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private storeService: StoreService) {}

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

    this.storeService.portfolioItemsSubject.next([
      { id: '1', name: 'example', label: 'Example 1', img: 'default' },
      { id: '2', name: 'example2', label: 'Example 2', img: 'default' },
      { id: '3', name: 'example3', label: 'Example 3', img: 'default' },
      { id: '4', name: 'example4', label: 'Example 4', img: 'default' }
    ]);

    this.storeService.blogItemsSubject.next([
      { id: '1', name: 'post1', label: 'Example 1', img: 'default' },
      { id: '2', name: 'example2', label: 'Example 2', img: 'default' },
      { id: '3', name: 'example3', label: 'Example 3', img: 'default' },
      { id: '4', name: 'example4', label: 'Example 4', img: 'default' }
    ]);
  }

  navigate = tab => {
    this.router.navigate(['./' + tab.name], {
      relativeTo: this.activatedRoute
    });
  };

  private selectItem = (url: string) => {
    const itemName = url.split('/')[1];
    const item = _.find(this.navbarItems, navbarItem => navbarItem.name === itemName);
    this.selectedNavbarItem = item;
  };
}
