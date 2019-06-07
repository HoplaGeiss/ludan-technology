import {
  Component,
  EventEmitter,
  Input,
  Output,
  HostListener,
  ViewChild,
  ElementRef
} from '@angular/core';

export interface NavbarItemInterface {
  label: string;
  name?: string;
}

@Component({
  selector: 'ludan-navbar',
  styleUrls: ['navbar.component.scss'],
  template: `
    <nav #nav class="navbar">
      <img src="assets/images/logo.png" routerLink="/" class="logo" />
      <div
        class="overlay"
        (click)="overlayClick()"
        [class.hidden]="hideMobileLinks"
      ></div>
      <ul class="links" [class.hidden]="hideMobileLinks">
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
        (click)="toggleMobileLinks()"
      />
    </nav>
  `
})
export class NavbarComponent {
  @Input() items: NavbarItemInterface[];
  @Input() selectedItem: NavbarItemInterface;

  @Output() selectEvent = new EventEmitter();

  @ViewChild('nav') nav: ElementRef;

  hideMobileLinks = true;

  selectItem = item => {
    this.selectEvent.emit(item);
    if (!this.hideMobileLinks) this.hideMobileLinks = true;
  };

  toggleMobileLinks = () => {
    this.hideMobileLinks = !this.hideMobileLinks;
  };

  overlayClick = () => {
    if (!this.hideMobileLinks) this.hideMobileLinks = true;
  };

  @HostListener('window:scroll', ['$event']) onWindowScroll() {
    // window.pageYOffset > 0
    //   ? this.nav.nativeElement.classList.add('colored')
    //   : this.nav.nativeElement.classList.remove('colored');
  }
}
