import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PortfolioItem } from '../models/portfolio-item.model';

@Injectable()
export class PortfolioService {
  public portfolioItemsSubject = new BehaviorSubject<PortfolioItem[]>([]);
}
