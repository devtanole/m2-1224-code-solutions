import { Product } from '../lib';
import { createContext } from 'react';

export type CartValue = {
  cart: Product[];
  addToCart: (product: Product) => void;
};

const defaultCartValue: CartValue = {
  cart: [],
  addToCart: () => undefined,
};

export const CartContext = createContext<CartValue>(defaultCartValue);
