import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StoreService } from '../shared/services/store.service';
import { CatalogueItem } from './../shared/models/catalogue-item.model';

@Component({
  selector: 'ludan-portfolio',
  styleUrls: ['./blog.component.scss'],
  template: `
    <article class="blog">
      <h1>Blog</h1>
      <div class="blog__catalogue">
        <ludan-catalogue
          [catalogueItems]="blogItems"
          (selectEvent)="selectItem($event)"
        ></ludan-catalogue>
      </div>
    </article>
  `
})
export class BlogComponent implements OnInit {
  public blogItems: CatalogueItem[];

  constructor(private storeService: StoreService, private router: Router) {}

  ngOnInit() {
    this.blogItems = this.storeService.blogItemsSubject.getValue();
  }

  selectItem = (item: CatalogueItem) => {
    this.router.navigate([`/blog/${item.name}`]);
  };
}
