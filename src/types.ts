export type Product = {
  id: string;
  attributes: { [key: string]: string };
  created_at: Date;
  description: string;
  images: string[];
  name: string;
  price: number;
  user: string;
};
