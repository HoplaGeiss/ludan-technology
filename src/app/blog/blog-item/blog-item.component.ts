import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'underscore';

import { CatalogueItem } from './../../shared/models/catalogue-item.model';
import { StoreService } from './../../shared/services/store.service';

@Component({
  selector: 'ludan-blog-item',
  styleUrls: ['blog-item.component.scss'],
  template: `
    <div class="blog-item">
      <article class="article">
        <h2 class="article__title">{{ blogItem.label }}</h2>
        <p class="article__date">{{ blogItem.date }}</p>
        <markdown
          *ngIf="blogItem"
          [src]="'./assets/blog/' + blogItem.date + '_' + blogItem.name + '.md'"
        ></markdown>
      </article>
    </div>
  `
})
export class BlogItemComponent implements OnInit {
  public blogItems: CatalogueItem[];
  public blogItem: CatalogueItem;

  constructor(private storeService: StoreService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.blogItems = this.storeService.blogItemsSubject.getValue();
    const blogItemName = this.route.snapshot.params.name;
    this.blogItem = _.find(this.blogItems, blogItem => blogItem.name === blogItemName);
  }
}
