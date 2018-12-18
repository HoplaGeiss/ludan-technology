import { Component, OnDestroy } from '@angular/core';
import { storiesOf } from '@storybook/angular';
import { Subject } from 'rxjs';

import { FooterModule } from './footer.module';

@Component({
  selector: 'ludan-story',
  template: `
    <div style="margin: auto; width: 60%; margin-top: 10%">
      <h1 style="border-bottom: 1px solid #ccc;">Footer</h1>
      <ludan-footer></ludan-footer>
    </div>
  `
})
class MockComponent implements OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

storiesOf('Shared', module).add('Footer', () => ({
  moduleMetadata: {
    imports: [FooterModule],
    declarations: [MockComponent]
  },
  template: `
    <ludan-story></ludan-story>
  `
}));
