export interface PortfolioItemInterface {
  id: number;
  name: string;
  img?: string;
}

export class PortfolioItem implements PortfolioItemInterface {
  id: number;
  name: string;
  img?: string;

  constructor(portfolioItem: any) {
    this.id = portfolioItem.id;
    this.name = portfolioItem.name;
    this.img = portfolioItem.img || 'default';
  }
}
