
export interface Destination {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  duration: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
