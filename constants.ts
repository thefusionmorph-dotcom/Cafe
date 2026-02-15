
import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'c1',
    name: 'Vanilla Lavender Latte',
    description: 'Espresso with house-made lavender syrup and silky oat milk.',
    price: '$6.50',
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'c2',
    name: 'Smoked Sea Salt Mocha',
    description: 'Dark chocolate, double espresso, and a hint of Maldon sea salt.',
    price: '$6.75',
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1544787210-2211d44b505b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p1',
    name: 'Pistachio Rose Croissant',
    description: 'Twice-baked buttery croissant filled with pistachio frangipane.',
    price: '$5.50',
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p2',
    name: 'Wildberry Galette',
    description: 'Seasonal berries in a flaky, hand-folded pastry crust.',
    price: '$7.00',
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 't1',
    name: 'Matcha Ceremonial Grade',
    description: 'Whisked to perfection with light hints of umami and sweetness.',
    price: '$6.00',
    category: 'Tea',
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'b1',
    name: 'Avocado & Truffle Toast',
    description: 'Sourdough, smashed avocado, truffle oil, and a poached egg.',
    price: '$14.00',
    category: 'Brunch',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80'
  }
];

export const CATEGORIES = ['Coffee', 'Tea', 'Pastries', 'Brunch'] as const;
