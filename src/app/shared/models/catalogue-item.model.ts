export interface CatalogueItemInterface {
  id: string;
  name: string;
  label: string;
  img?: string;
  description?: string;
  url?: string;
  date?: string;
  tags?: string[];
}

export class CatalogueItem implements CatalogueItemInterface {
  id: string;
  name: string;
  label: string;
  img?: string;
  description?: string;
  url?: string;
  date?: string;
  tags?: string[];

  constructor(catalogueItem: any) {
    this.id = catalogueItem.id;
    this.name = catalogueItem.name;
    this.label = catalogueItem.label;
    this.img = catalogueItem.img || 'default';
    this.description = catalogueItem.description;
    this.url = catalogueItem.url;
    this.date = catalogueItem.date;
    this.tags = catalogueItem.tags;
  }
}
