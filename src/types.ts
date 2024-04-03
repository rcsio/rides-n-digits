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

export type User = {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
};
