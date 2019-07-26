import { filter, map, distinctUntilChanged } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';

export interface BreadCrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'ludan-breadcrumb',
  styleUrls: ['breadcrumb.component.scss'],
  template: `
    <div class="breadcrumbs">
      <span
        *ngFor="let breadcrumb of breadcrumbs$ | async; index as i"
        class="breadcrumb"
        [hidden]="router.url === '/'"
      >
        <span [hidden]="i === 0">/</span>
        <a [routerLink]="breadcrumb.url" class="link">{{
          breadcrumb.label | titleCase: '_'
        }}</a>
      </span>
    </div>
  `
})
export class BreadcrumbComponent implements OnInit {
  constructor(private router: Router) {}
  breadcrumbs$: Observable<any>;

  ngOnInit() {
    this.breadcrumbs$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      distinctUntilChanged(),
      map(() => this.buildBreadCrumb(this.router.url))
    );
  }

  buildBreadCrumb(url: string): Array<BreadCrumb> {
    const segments = url.split('/');
    let currentUrl = '';

    return segments.map((segment, i) => {
      currentUrl += '/' + segment;
      return {
        label: i === 0 ? 'Home' : segment,
        url: currentUrl
      };
    });
  }
}
