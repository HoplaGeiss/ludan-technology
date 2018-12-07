import { Component, Input } from '@angular/core';

@Component({
  selector: 'ludan-portfolio-item',
  styleUrls: ['portfolio-item.component.scss'],
  template: `
    <markdown src="./assets/portfolio/example.md"></markdown>
  `
})
export class PortfolioItemComponent {}
