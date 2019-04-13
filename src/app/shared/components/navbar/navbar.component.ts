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
    <nav #nav>
      <img src="assets/images/logo.png" routerLink="/" />
      <ul fxHide.lt-sm>
        <li
          *ngFor="let item of items"
          (click)="selectItem(item)"
          [class.active]="item === selectedItem"
        >
          {{ item.label }}
        </li>
      </ul>
    </nav>
  `
})
export class NavbarComponent {
  @Input() items: NavbarItemInterface[];
  @Input() selectedItem: NavbarItemInterface;

  @Output() selectEvent = new EventEmitter();

  @ViewChild('nav') nav: ElementRef;

  selectItem = item => {
    this.selectEvent.emit(item);
  }

  @HostListener('window:scroll', ['$event']) onWindowScroll() {
    // window.pageYOffset > 0
    //   ? this.nav.nativeElement.classList.add('colored')
    //   : this.nav.nativeElement.classList.remove('colored');
  }
}
