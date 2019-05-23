import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as _ from 'underscore';
import * as libraryItems from './shared/db/library.json';

import { NavbarItemInterface } from './shared/components/navbar/navbar.component';
import { StoreService } from './shared/services/store.service';

@Component({
  selector: 'ludan-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <main>
      <ludan-navbar
        [items]="navbarItems"
        [selectedItem]="selectedNavbarItem"
        (selectEvent)="navigate($event)"
      ></ludan-navbar>
      <div class="content">
        <router-outlet></router-outlet>
      </div>
      <ludan-footer></ludan-footer>
    </main>
  `
})
export class AppComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<boolean>();

  public navbarItems: NavbarItemInterface[];
  public selectedNavbarItem: NavbarItemInterface;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private storeService: StoreService
  ) {}

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit() {
    this.navbarItems = [
      { label: 'Library', name: 'library' },
      { label: 'Blog', name: 'blog' },
      { label: 'Portfolio', name: 'portfolio' }
      // { label: 'Contact', name: 'contact' }
    ];

    // On Init we need to call select tab on the router url directly, as the events have already been fired.
    this.selectItem(this.router.url);

    this.router.events.pipe(takeUntil(this.destroy$)).subscribe(route => {
      if (route instanceof NavigationEnd) {
        this.selectItem(route.url);
      }
    });

    this.storeService.portfolioItemsSubject.next([
      { id: '2', name: 'managed_24_7', label: 'Managed 24/7', img: 'm247' }
    ]);

    this.storeService.libraryItemsSubject.next((libraryItems as any).items);

    this.storeService.blogItemsSubject.next([
      {
        id: '1',
        name: 'ngrx_guards_and_resolvers',
        label: 'NgRx guards and resolvers',
        img: 'guards'
      }
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
