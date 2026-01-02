import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Book } from '../data/books';
import { BookCard } from './BookCard';
interface BookRowProps {
  title: string;
  books: Book[];
  id?: string;
}
export function BookRow({
  title,
  books,
  id
}: BookRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  return <section id={id} className="py-12 border-b border-slate-100 dark:border-slate-800/50 last:border-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white">
            {title}
          </h2>
          <a href="#" className="group flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
            View All
            <ChevronRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="relative group">
          {/* Fade Indicators */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none hidden md:block" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none hidden md:block" />

          {/* Scroll Container */}
          <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-8 pt-2 px-1 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0" style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
            {books.map((book, index) => <motion.div key={book.id} initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true,
            margin: '-50px'
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="snap-start">
                <BookCard book={book} />
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}