export interface PortfolioItemInterface {
  id: string;
  name: string;
  label: string;
  img?: string;
}

export class PortfolioItem implements PortfolioItemInterface {
  id: string;
  name: string;
  label: string;
  img?: string;

  constructor(portfolioItem: any) {
    this.id = portfolioItem.id;
    this.name = portfolioItem.name;
    this.label = portfolioItem.label;
    this.img = portfolioItem.img || 'default';
  }
}
