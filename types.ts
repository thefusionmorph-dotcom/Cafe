
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Coffee' | 'Tea' | 'Pastries' | 'Brunch';
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
