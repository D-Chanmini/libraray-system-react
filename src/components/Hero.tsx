import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Book } from '../data/books';
interface HeroProps {
  featuredBook: Book;
}
export function Hero({
  featuredBook
}: HeroProps) {
  return <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent dark:from-blue-900/20 dark:to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Content */}
          <motion.div className="flex-1 text-center md:text-left space-y-8" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Book of the Week
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 dark:text-white leading-tight">
              {featuredBook.title}
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              {featuredBook.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <span>Start Reading</span>
                <ArrowRight size={20} />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold hover:border-slate-900 dark:hover:border-white transition-all flex items-center justify-center gap-2">
                <BookOpen size={20} />
                <span>View Details</span>
              </button>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div className="flex-1 relative" initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            <div className="relative w-64 md:w-80 lg:w-96 mx-auto aspect-[2/3] rounded-lg shadow-2xl shadow-blue-900/20 dark:shadow-blue-500/10 transform rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer group">
              <img src={featuredBook.cover} alt={featuredBook.title} className="w-full h-full object-cover rounded-lg" />
              {/* Spine Effect */}
              <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-white/20 to-transparent rounded-l-lg pointer-events-none" />
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg" />
            </div>

            {/* Decorative Elements behind book */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>;
}