
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU_ITEMS, CATEGORIES } from '../constants';
import { Plus } from 'lucide-react';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<typeof CATEGORIES[number]>('Coffee');

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            Curated Selection
          </motion.h2>
          <p className="text-[#5A4B41]">
            From the volcanic soils of Ethiopia to the high-altitudes of Colombia, we source only the finest specialty beans.
          </p>
        </div>

        {/* Categories */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                ? 'bg-[#2D241E] text-white shadow-lg' 
                : 'bg-gray-50 text-[#5A4B41] hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-2xl bg-gray-50 p-4 transition-all hover:bg-white hover:shadow-xl"
              >
                <div className="aspect-square overflow-hidden rounded-xl mb-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-serif font-bold">{item.name}</h3>
                  <span className="text-[#8B5E3C] font-semibold">{item.price}</span>
                </div>
                <p className="text-sm text-[#5A4B41] mb-6 line-clamp-2">
                  {item.description}
                </p>
                <button className="w-full flex items-center justify-center gap-2 py-3 bg-[#FDFCFB] border border-[#2D241E] rounded-xl text-sm font-medium hover:bg-[#2D241E] hover:text-white transition-all">
                  <Plus size={16} /> Add to Order
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
