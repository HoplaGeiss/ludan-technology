import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'underscore';
import { CatalogueItem } from './../../shared/models/catalogue-item.model';
import { StoreService } from './../../shared/services/store.service';

@Component({
  selector: 'ludan-blog-item',
  styleUrls: ['blog-item.component.scss'],
  template: `
    <section
      class="blog-item section"
      itemprop="exampleOfWork"
      itemscope=""
      itemtype="http://schema.org/BlogPosting"
    >
      <h2 class="title" itemprop="headline">{{ blogItem.label }}</h2>
      <p class="subtitle">
        <span
          class="publisher"
          itemprop="publisher"
          itemscope=""
          itemtype="http://schema.org/Organization"
          ><span itemprop="name">Ludan Technology Ltd</span>
          <span>&nbsp;|&nbsp;</span>
          <span itemprop="logo" itemscope="" itemtype="http://schema.org/imageObject">
            <span itemprop="url" content="https://ludan.io/assets/images/logo.WebP"></span
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
        <span class="date">{{ blogItem.dateUTC | date: 'MMM d, y' }}</span>
        <span class="datePublished" itemprop="datePublished">{{ blogItem.date }}</span>
        <span class="dateModified" itemprop="dateModified">
          <span *ngIf="blogItem.dateModified">{{ blogItem.dateModified }}</span>
          <span *ngIf="!blogItem.dateModified">{{ blogItem.date }}</span>
        </span>
      </p>
      <p class="tags">
        <span *ngFor="let tag of blogItem.tags" class="tag">{{ tag }}</span>
      </p>
      <span itemprop="keywords" class="keywords">
        <span *ngFor="let tag of blogItem.tags; let last = last" class="tag">
          <span>{{ tag }}</span>
          <span *ngIf="!last">,&nbsp;</span>
        </span>
      </span>
      <img
        [lazyLoad]="'assets/images/' + blogItem.img"
        defaultImage="assets/images/default.WebP"
        class="image"
      />
      <span
        itemprop="image"
        itemscope=""
        itemtype="http://schema.org/imageObject"
        class="imageSchema"
      >
        <span itemprop="url">https://ludan.io/assets/images/{{ blogItem.img }}</span>
      </span>
      <div class="separator"></div>
      <markdown
        *ngIf="blogItem"
        [src]="'./assets/blog/' + blogItem.date + '_' + blogItem.name + '.md'"
      ></markdown>
    </section>
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
