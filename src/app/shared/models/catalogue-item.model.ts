export interface CatalogueItem {
  id: string;
  name: string;
  label: string;
  img?: string;
  description?: string;
  url?: string;
  date?: string;
  tags?: string[];
  featured?: boolean;
}
