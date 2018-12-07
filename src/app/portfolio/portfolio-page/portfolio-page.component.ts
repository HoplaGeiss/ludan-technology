import { Component, OnInit } from '@angular/core';

import { ThumbnailInterface } from '../../shared/models/thumnail.model';
import { ThumbnailService } from '../../shared/services/thumnail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ludan-portfolio',
  styleUrls: ['./portfolio-page.component.scss'],
  template: `
    <h1>Portfolio</h1>

    <div class="catalogue-wrapper">
      <ludan-catalogue [thumbnails]="thumbnails" (selectEvent)="selectThumbnail($event)"></ludan-catalogue>
    </div>
  `
})
export class PortfolioPageComponent implements OnInit {
  public thumbnails: ThumbnailInterface[];

  constructor(private thumbnailService: ThumbnailService, private router: Router) {}

  ngOnInit() {
    this.thumbnails = this.thumbnailService.thumbnailsSubject.getValue();
  }

  selectThumbnail = (thumbnail: ThumbnailInterface) => {
    this.router.navigate([`/portfolio/${thumbnail.id}`]);
  };
}
