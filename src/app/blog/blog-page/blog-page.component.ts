import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StoreService } from '../../shared/services/store.service';
import { CatalogueItem } from './../../shared/models/catalogue-item.model';

@Component({
  selector: 'ludan-portfolio',
  styleUrls: ['./blog-page.component.scss'],
  template: `
    <div class="catalogue-wrapper">
      <ludan-catalogue [catalogueItems]="blogItems" (selectEvent)="selectItem($event)"></ludan-catalogue>
    </div>
  `
})
export class BlogPageComponent implements OnInit {
  public blogItems: CatalogueItem[];

  constructor(private storeService: StoreService, private router: Router) {}

  ngOnInit() {
    this.blogItems = this.storeService.blogItemsSubject.getValue();
    console.log(this.blogItems);
  }

  selectItem = (item: CatalogueItem) => {
    this.router.navigate([`/blog/${item.id}`]);
  };
}
