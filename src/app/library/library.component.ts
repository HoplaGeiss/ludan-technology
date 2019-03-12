import { CatalogueItem } from './../shared/models/catalogue-item.model';
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../shared/services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ludan-library',
  styleUrls: ['./library.component.scss'],
  template: `
    <article class="library">
      <h1>Library</h1>

      <div class="library__catalogue">
        <ludan-catalogue [catalogueItems]="libraryItems" (selectEvent)="selectItem($event)"></ludan-catalogue>
      </div>
    </article>
  `
})
export class LibraryComponent implements OnInit {
  public libraryItems: CatalogueItem[];

  constructor(private storeService: StoreService, private router: Router) {}

  ngOnInit() {
    this.libraryItems = this.storeService.libraryItemsSubject.getValue();
  }

  selectItem = (item: CatalogueItem) => {
    this.router.navigate([`/library/${item.name}`]);
  };
}
