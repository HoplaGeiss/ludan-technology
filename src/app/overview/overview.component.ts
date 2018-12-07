import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ThumbnailInterface } from '../shared/models/thumnail.model';
import { ThumbnailService } from '../shared/services/thumnail.service';

@Component({
  selector: 'ludan-overview',
  styleUrls: ['./overview.component.scss'],
  template: `
    <h1>overview</h1>
    <div class="catalogue-wrapper">
      <ludan-catalogue [thumbnails]="thumbnails" (selectEvent)="selectThumbnail($event)"></ludan-catalogue>
    </div>
  `
})
export class OverviewComponent implements OnInit {
  public thumbnails: ThumbnailInterface[];

  constructor(private thumbnailService: ThumbnailService, private router: Router) {}

  ngOnInit() {
    this.thumbnails = this.thumbnailService.thumbnailsSubject.getValue();
  }

  selectThumbnail = (thumbnail: ThumbnailInterface) => {
    this.router.navigate([`/portfolio/${thumbnail.id}`]);
  };
}
