import { Component, OnDestroy, OnInit } from '@angular/core';
import { storiesOf } from '@storybook/angular';
import { Subject } from 'rxjs';

import { NavbarModule } from './navbar.module';
import { NavbarItemInterface } from './navbar.component';

@Component({
  selector: 'ludan-story',
  template: `
    <div style="margin: auto; width: 60%; margin-top: 10%">
      <h1 style="border-bottom: 1px solid #ccc;">Navbar</h1>
      <ludan-navbar [items]="items" [selectedItem]="selectedItem" (selectEvent)="selectItem($event)"></ludan-navbar>
    </div>
  `
})
class MockComponent implements OnDestroy, OnInit {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  public items: NavbarItemInterface[];
  public selectedItem: NavbarItemInterface;

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit() {
    this.items = [{ label: 'Portfolio' }, { label: 'Blog' }, { label: 'Contact' }];
    this.selectedItem = this.items[0];
  }

  selectItem = item => (this.selectedItem = item);
}

storiesOf('Navbar', module).add('Default', () => ({
  moduleMetadata: {
    imports: [NavbarModule],
    declarations: [MockComponent]
  },
  template: `
    <ludan-story></ludan-story>
  `
}));
