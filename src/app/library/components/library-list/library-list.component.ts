import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StoreService } from '../../../shared/services/store.service';
import { CatalogueItem } from './../../../shared/models/catalogue-item.model';

@Component({
  selector: 'ludan-library-list',
  styleUrls: ['./library-list.component.scss'],
  template: `
    <article class="library-list">
      <h1>Example of my work</h1>
      <p>Please find a bellow a list of the components over the year in my free time.</p>

      <div class="library__catalogue">
        <ludan-catalogue
          [catalogueItems]="libraryItems"
          (selectEvent)="selectItem($event)"
        ></ludan-catalogue>
      </div>
    </article>
  `
})
export class LibraryListComponent implements OnInit {
  public libraryItems: CatalogueItem[];

  constructor(private storeService: StoreService, private router: Router) {}

  ngOnInit() {
    this.libraryItems = this.storeService.libraryItemsSubject.getValue();
  }

  selectItem = (item: CatalogueItem) => {
    this.router.navigate([`/library/${item.name}`]);
  };
}
