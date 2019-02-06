import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { CatalogueItem } from './../models/catalogue-item.model';

@Injectable()
export class StoreService {
  public portfolioItemsSubject = new BehaviorSubject<CatalogueItem[]>([]);
  public blogItemsSubject = new BehaviorSubject<CatalogueItem[]>([]);
  public libraryItemsSubject = new BehaviorSubject<CatalogueItem[]>([]);
}
