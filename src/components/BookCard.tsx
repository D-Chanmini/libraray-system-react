import React, { lazy } from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingBag } from 'lucide-react';
import { Book } from '../data/books';
interface BookCardProps {
  book: Book;
}
export function BookCard({
  book
}: BookCardProps) {
  return <motion.div className="group relative flex-shrink-0 w-[180px] sm:w-[220px] cursor-pointer" whileHover={{
    y: -8
  }} transition={{
    type: 'spring',
    stiffness: 300,
    damping: 20
  }}>
      {/* Book Cover */}
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-md transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-blue-900/20 dark:group-hover:shadow-blue-500/10">
        <img src={book.cover} alt={`Cover of ${book.title}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Quick Action Button */}
        <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button className="p-2 rounded-full bg-white text-slate-900 shadow-lg hover:bg-blue-50 transition-colors" aria-label="Add to cart">
            <ShoppingBag size={18} />
          </button>
        </div>

        {/* Badges */}
        {book.isNew && <div className="absolute top-2 left-2 px-2 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-sm shadow-sm">
            New
          </div>}
      </div>

      {/* Book Details */}
      <div className="mt-4 space-y-1">
        <h3 className="text-base font-bold text-slate-900 dark:text-white line-clamp-1 font-serif group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {book.title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-1">
          {book.author}
        </p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1 text-amber-400">
            <Star size={14} fill="currentColor" />
            <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
              {book.rating}
            </span>
          </div>
          <span className="text-sm font-semibold text-slate-900 dark:text-white">
            {book.price}
          </span>
        </div>
      </div>
    </motion.div>;
}