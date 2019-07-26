import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'underscore';

import { CatalogueItem } from './../../shared/models/catalogue-item.model';
import { StoreService } from './../../shared/services/store.service';

@Component({
  selector: 'ludan-blog-item',
  styleUrls: ['blog-item.component.scss'],
  template: `
    <div
      class="blog-item"
      itemprop="exampleOfWork"
      itemscope=""
      itemtype="http://schema.org/BlogPosting"
    >
      <article class="article">
        <h2 class="title" itemprop="headline">{{ blogItem.label }}</h2>
        <p class="subtitle">
          <span
            class="publisher"
            itemprop="publisher"
            itemscope=""
            itemtype="http://schema.org/Organization"
            ><span itemprop="name">Ludan Technology Ltd |&nbsp;</span>
            <span itemprop="logo" itemscope="" itemtype="http://schema.org/imageObject"
              ><span
                itemprop="url"
                content="https://ludan.io/assets/images/logo.png"
              ></span
            ></span>
          </span>
          <span
            class="author"
            itemprop="author"
            itemscope=""
            itemtype="http://schema.org/Person"
            ><span itemprop="name">Gabriel Muller</span>
          </span>
          <span>&nbsp;|&nbsp;</span>
          <span class="date" itemprop="datePublished">{{ blogItem.date }}</span>
        </p>
        <p class="tags" itemprop="keywords">
          <span *ngFor="let tag of blogItem.tags" class="tag">{{ tag }}</span>
        </p>
        <img
          itemprop="image"
          [src]="'assets/images/' + blogItem.img + '.png'"
          class="image"
        />
        <div class="separator"></div>
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
