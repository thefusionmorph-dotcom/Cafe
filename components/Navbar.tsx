
import React, { useState, useEffect } from 'react';
import { Coffee, Menu, X, Instagram, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass shadow-sm' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="w-10 h-10 bg-[#2D241E] rounded-full flex items-center justify-center text-white">
            <Coffee size={20} />
          </div>
          <span className="text-xl font-serif font-bold tracking-tight">L'ARTISTE</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Menu', 'Story', 'Location', 'Reserve'].map((item, idx) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="text-sm font-medium hover:text-[#8B5E3C] transition-colors"
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-5 py-2 bg-[#2D241E] text-white rounded-full text-sm hover:bg-[#4A3B31] transition-all"
          >
            Order Now
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {['Menu', 'Story', 'Location', 'Reserve'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif"
                >
                  {item}
                </a>
              ))}
              <div className="flex gap-4 mt-4 pt-4 border-t border-gray-200">
                <Instagram size={20} className="text-[#2D241E]" />
                <Twitter size={20} className="text-[#2D241E]" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
