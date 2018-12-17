export interface CatalogueItemInterface {
  id: string;
  name: string;
  label: string;
  img?: string;
}

export class CatalogueItem implements CatalogueItemInterface {
  id: string;
  name: string;
  label: string;
  img?: string;

  constructor(catalogueItem: any) {
    this.id = catalogueItem.id;
    this.name = catalogueItem.name;
    this.label = catalogueItem.label;
    this.img = catalogueItem.img || 'default';
  }
}
