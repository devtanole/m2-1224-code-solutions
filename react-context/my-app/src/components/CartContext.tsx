import { Product } from '../lib';
import { createContext } from 'react';

export type CartContextValues = {
  cart: Product[];
  addToCart: (product: Product) => void;
};

export const CartContext = createContext<CartContextValues>({
  cart: [],
  addToCart: () => undefined,
});
