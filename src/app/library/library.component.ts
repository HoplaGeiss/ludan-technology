import { CatalogueItem } from './../shared/models/catalogue-item.model';
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../shared/services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ludan-library',
  styleUrls: ['./library.component.scss'],
  template: `
    <h1>Library</h1>

    <div class="catalogue-wrapper">
      <ludan-catalogue [catalogueItems]="libraryItems" (selectEvent)="selectItem($event)"></ludan-catalogue>
    </div>
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
