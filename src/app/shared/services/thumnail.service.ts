import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThumbnailInterface } from '../models/thumnail.model';

@Injectable()
export class ThumbnailService {
  public thumbnailsSubject = new BehaviorSubject<ThumbnailInterface[]>([]);
}
