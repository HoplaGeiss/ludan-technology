import { Component, OnDestroy, OnInit } from '@angular/core';
import { storiesOf } from '@storybook/angular';
import { Subject } from 'rxjs';

import { ThumbnailModule } from './thumbnail.module';

@Component({
  selector: 'ludan-story',
  template: `
    <div style="margin: auto; width: 60%; margin-top: 10%">
      <h1 style="border-bottom: 1px solid #ccc;">Thumbnail</h1>
      <div style="width: 80%; height: 400px;">
        <ludan-thumbnail
          name="This is an example of a sudoku. By the way it's a really long name"
          img="sudoku.WebP"
          (clickEvent)="openCaseStudy($event)"
        ></ludan-thumbnail>
      </div>
    </div>
  `
})
class MockComponent implements OnDestroy, OnInit {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit() {}

  openCaseStudy = caseStudy => {
    console.log('Open portolioItem', caseStudy);
  };
}

storiesOf('Shared/Catalogue', module).add('Thumbnail', () => ({
  moduleMetadata: {
    imports: [ThumbnailModule],
    declarations: [MockComponent]
  },
  template: `
    <ludan-story></ludan-story>
  `
}));
