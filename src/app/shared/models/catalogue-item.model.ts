export interface CatalogueItem {
  id: string;
  name: string;
  label: string;
  img?: string;
  description?: string;
  url?: string;
  date?: string;
  dateModified?: string;
  dateUTC?: Date;
  tags?: string[];
  featured?: boolean;
}
