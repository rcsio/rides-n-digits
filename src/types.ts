export type Category = {
  id: number;
  name: string;
  slug: string;
  created_at: string;
  updated_at: string;
};

export type Image = {
  id: number;
  name: string;
  product_id: number;
  created_at: string;
  updated_at: string;
};

export type Product = {
  id: string;
  attributes: { [key: string]: string };
  created_at: string;
  updated_at: string;
  description: string;
  images: Omit<Image, "created_at" | "updated_at">[];
  name: string;
  price: number;
  user: string;
  slug: string;
  active: boolean;
  open_to_offers: boolean;
  category_id: number;
  user_id: number;
};

export type User = {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
};

export type SimplePaginate<T> = {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
};
