import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';

export interface NavbarItemInterface {
  label: string;
  name?: string;
}

@Component({
  selector: 'ludan-navbar',
  styleUrls: ['navbar.component.scss'],
  animations: [
    trigger('toggleOverlay', [
      state(
        '1',
        style({
          opacity: 0.5
        })
      ),
      state(
        '0',
        style({
          opacity: 0
        })
      ),
      transition('1 => 0', animate('200ms 300ms ease-out')),
      transition('0 => 1', animate('200ms ease-in'))
    ]),
    trigger('toggleSidebar', [
      state('1', style({ transform: 'translateX(0)' })),
      state('0', style({ transform: 'translateX(200px)' })),
      transition('1 => 0', animate('200ms ease-out')),
      transition('0 => 1', animate('200ms 300ms ease-in'))
    ])
  ],
  template: `
    <nav class="navbar">
      <img src="assets/images/logo.WebP" routerLink="/" class="logo" />
      <div
        class="overlay"
        (click)="overlayClick()"
        [@toggleOverlay]="sidebarOpen"
        [class.hidden]="!sidebarOpen"
      ></div>
      <ul class="nav nav-xl">
        <li
          *ngFor="let item of items"
          (click)="selectItem(item)"
          [class.active]="item === selectedItem"
          class="link"
        >
          {{ item.label }}
        </li>
      </ul>
      <ul class="nav nav-xs" [@toggleSidebar]="sidebarOpen">
        <li
          *ngFor="let item of items"
          (click)="selectItem(item)"
          [class.active]="item === selectedItem"
          class="link"
        >
          {{ item.label }}
        </li>
      </ul>
      <img
        class="menu"
        src="assets/icons/burger.svg"
        alt="Menu"
        (click)="toggleSidebar()"
      />
    </nav>
  `
})
export class NavbarComponent {
  @Input() items: NavbarItemInterface[];
  @Input() selectedItem: NavbarItemInterface;

  @Output() selectEvent = new EventEmitter();

  @ViewChild('nav', { static: false }) nav: ElementRef;

  sidebarOpen = false;

  selectItem = item => {
    this.selectEvent.emit(item);
    if (this.sidebarOpen) this.sidebarOpen = false;
  };

  toggleSidebar = () => {
    this.sidebarOpen = !this.sidebarOpen;
  };

  overlayClick = () => {
    if (this.sidebarOpen) this.sidebarOpen = false;
  };
}
