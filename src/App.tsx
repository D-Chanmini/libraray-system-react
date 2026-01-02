import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BookRow } from './components/BookRow';
import { books } from './data/books';
function App() {
  const featuredBook = books[0];
  const newArrivals = books.filter(b => b.isNew);
  const popularBooks = books.filter(b => b.rating >= 4.7);
  const fictionBooks = books.filter(b => b.category === 'Fiction');
  return <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Font Imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
      `}</style>

      <Navbar />

      <main>
        <Hero featuredBook={featuredBook} />

        <div className="space-y-4 pb-20">
          <BookRow id="featured" title="New Arrivals" books={newArrivals} />

          <BookRow id="popular" title="Popular This Month" books={popularBooks} />

          <BookRow id="categories" title="Best in Fiction" books={fictionBooks} />
        </div>
      </main>

      <footer className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Dinuri's Library
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-8">
            Discover your next favorite story.
          </p>
          <div className="text-sm text-slate-400 dark:text-slate-600">
            © {new Date().getFullYear()} Dinuri's Library. All rights reserved.
          </div>
        </div>
      </footer>
    </div>;
}
export { App };