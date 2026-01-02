export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
  category: 'Fiction' | 'Non-Fiction' | 'Mystery' | 'Sci-Fi' | 'Romance';
  rating: number;
  price: string;
  isNew?: boolean;
  isFeatured?: boolean;
}
export const books: Book[] = [{
  id: '1',
  title: 'The Midnight Library',
  author: 'Matt Haig',
  cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
  description: 'Between life and death there is a library, and within that library, the shelves go on forever.',
  category: 'Fiction',
  rating: 4.8,
  price: '$14.99',
  isFeatured: true
}, {
  id: '2',
  title: 'Project Hail Mary',
  author: 'Andy Weir',
  cover: 'https://images.unsplash.com/photo-1614544048536-0d28caf77f41?auto=format&fit=crop&q=80&w=800',
  description: 'A lone astronaut must save the earth from disaster in this incredible new science-based thriller.',
  category: 'Sci-Fi',
  rating: 4.9,
  price: '$18.99',
  isNew: true
}, {
  id: '3',
  title: 'The Silent Patient',
  author: 'Alex Michaelides',
  cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
  description: 'Alicia Berenson’s life is seemingly perfect. A famous painter married to an in-demand fashion photographer.',
  category: 'Mystery',
  rating: 4.5,
  price: '$12.99'
}, {
  id: '4',
  title: 'Atomic Habits',
  author: 'James Clear',
  cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
  // Reusing for demo consistency style
  description: 'No matter your goals, Atomic Habits offers a proven framework for improving--every day.',
  category: 'Non-Fiction',
  rating: 5.0,
  price: '$16.99',
  isNew: true
}, {
  id: '5',
  title: 'Dune',
  author: 'Frank Herbert',
  cover: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800',
  description: 'Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides.',
  category: 'Sci-Fi',
  rating: 4.7,
  price: '$15.99'
}, {
  id: '6',
  title: 'Educated',
  author: 'Tara Westover',
  cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
  description: 'Born to survivalists in the mountains of Idaho, Tara Westover was seventeen the first time she set foot in a classroom.',
  category: 'Non-Fiction',
  rating: 4.6,
  price: '$13.99'
}, {
  id: '7',
  title: 'Where the Crawdads Sing',
  author: 'Delia Owens',
  cover: 'https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?auto=format&fit=crop&q=80&w=800',
  description: 'For years, rumors of the "Marsh Girl" have haunted Barkley Cove, a quiet town on the North Carolina coast.',
  category: 'Fiction',
  rating: 4.8,
  price: '$14.50'
}, {
  id: '8',
  title: 'Dark Matter',
  author: 'Blake Crouch',
  cover: 'https://images.unsplash.com/photo-1614544048536-0d28caf77f41?auto=format&fit=crop&q=80&w=800',
  description: 'Jason Dessen is walking home through the chilly Chicago streets one night, looking forward to a quiet evening.',
  category: 'Sci-Fi',
  rating: 4.4,
  price: '$11.99'
}, {
  id: '9',
  title: 'The Thursday Murder Club',
  author: 'Richard Osman',
  cover: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
  description: 'In a peaceful retirement village, four unlikely friends meet weekly in the Jigsaw Room to discuss unsolved crimes.',
  category: 'Mystery',
  rating: 4.3,
  price: '$17.00',
  isNew: true
}, {
  id: '10',
  title: 'Book Lovers',
  author: 'Emily Henry',
  cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800',
  description: "One summer. Two rivals. A plot twist they didn't see coming...",
  category: 'Romance',
  rating: 4.5,
  price: '$13.50'
}, {
  id: '11',
  title: 'Sapiens',
  author: 'Yuval Noah Harari',
  cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
  description: 'From a renowned historian comes a groundbreaking narrative of humanity’s creation and evolution.',
  category: 'Non-Fiction',
  rating: 4.7,
  price: '$19.99'
}, {
  id: '12',
  title: 'The Seven Husbands of Evelyn Hugo',
  author: 'Taylor Jenkins Reid',
  cover: 'https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?auto=format&fit=crop&q=80&w=800',
  description: 'Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life.',
  category: 'Fiction',
  rating: 4.8,
  price: '$15.00',
  isNew: true
}];