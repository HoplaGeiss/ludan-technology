import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/shared/services/store.service';
import * as _ from 'underscore';
import { CatalogueItem } from '../../../shared/models/catalogue-item.model';

@Component({
  selector: 'ludan-library-items',
  styleUrls: ['./library-item.component.scss'],
  template: `
    <section
      class="library-item section"
      itemprop="exampleOfWork"
      itemscope=""
      itemtype="http://schema.org/WebPageElement"
    >
      <h2 class="title" itemprop="headline">{{ item.label }}</h2>
      <p class="subtitle">
        <span
          class="publisher"
          itemprop="publisher"
          itemscope=""
          itemtype="http://schema.org/Organization"
          ><span itemprop="name">Ludan Technology Ltd</span>
          <span>&nbsp;|&nbsp;</span>
          <span itemprop="logo" itemscope="" itemtype="http://schema.org/imageObject"
            ><span
              itemprop="url"
              content="https://ludan.io/assets/images/logo.WebP"
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
        <span class="date">{{ item.dateUTC | date: 'MMM d, y' }}</span>
        <span class="datePublished" itemprop="datePublished">{{ item.date }}</span>
        <span class="dateModified" itemprop="dateModified">
          <span *ngIf="item.dateModified">{{ item.dateModified }}</span>
          <span *ngIf="!item.dateModified">{{ item.date }}</span>
        </span>
      </p>
      <p class="tags">
        <span *ngFor="let tag of item.tags" class="tag">{{ tag }}</span>
      </p>
      <span itemprop="keywords" class="keywords">
        <span *ngFor="let tag of item.tags; let last = last" class="tag">
          <span>{{ tag }}</span>
          <span *ngIf="!last">,&nbsp;</span>
        </span>
      </span>
      <div class="description">
        <p>{{ item.description }}</p>
        <p class="source-code">
          <span>Source code: </span
          ><a [href]="item.url" itemprop="isBasedOn">{{ item.url }}</a>
        </p>
        <div class="separator"></div>
      </div>
      <div class="content"><router-outlet></router-outlet></div>
      <disqus [identifier]="'library/' + item.name"></disqus>
    </section>
  `
})
export class LibraryItemComponent implements OnInit {
  public item: CatalogueItem;
  @ViewChild('datePublished') datePublished: ElementRef;

  constructor(private storeService: StoreService, private router: Router) {}

  ngOnInit() {
    // TODO - find a less hacky way of doing that.
    const name = this.router.url.split('/').pop();
    const libraryItems = this.storeService.libraryItemsSubject.getValue();
    this.item = _.find(libraryItems, libraryItem => libraryItem.name === name);
  }
}
