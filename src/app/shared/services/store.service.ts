import { CatalogueItem } from './../models/catalogue-item.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class StoreService {
  public portfolioItemsSubject = new BehaviorSubject<CatalogueItem[]>([]);
  public blogItemsSubject = new BehaviorSubject<CatalogueItem[]>([]);
}
