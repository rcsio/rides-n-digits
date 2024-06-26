export type Category = {
  id: number;
  name: string;
  products_count: number;
  slug: string;
  created_at: string;
  updated_at: string;
};

export type Image = {
  id: number;
  filename: string;
  href: string;
  product_id: number;
  created_at: string;
  updated_at: string;
};

export type Product = {
  id: number;
  attributes: { [key: string]: any };
  created_at: string;
  updated_at: string;
  description: string;
  images: Image[];
  name: string;
  price: number;
  currency: string;
  city: string;
  country: string;
  user: string;
  slug: string;
  active: boolean;
  warranty: boolean;
  open_to_offers: boolean;
  category_slug: string;
  user_id: number;
};

export type User = {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  products_count: number;
};

export type SimplePaginate<T> = {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number;
  next_page_url: string | null;
  path: string;
  per_page: number | string;
  prev_page_url: string | null;
  to: number;
};
