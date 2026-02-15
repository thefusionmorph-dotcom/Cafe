
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Shapes */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -right-20 w-96 h-96 bg-[#F5E6D3] rounded-full blur-3xl opacity-50"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#E8D9CD] rounded-full blur-3xl opacity-50"
      />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 bg-[#F5E6D3] text-[#8B5E3C] rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            Brewed with Passion
          </span>
          <h1 className="text-6xl md:text-8xl font-serif mb-8 leading-tight">
            Artistry in <br />
            <span className="italic text-[#8B5E3C]">Every Sip.</span>
          </h1>
          <p className="text-lg text-[#5A4B41] max-w-lg mb-10 leading-relaxed">
            Experience the fusion of rare coffee beans and curated botanical flavors in an atmosphere designed for the creative soul.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-[#2D241E] text-white rounded-full font-medium hover:bg-[#4A3B31] transition-all transform hover:-translate-y-1">
              Explore Menu
            </button>
            <button className="px-8 py-4 border border-[#2D241E] rounded-full font-medium hover:bg-[#2D241E] hover:text-white transition-all transform hover:-translate-y-1">
              Our Story
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80" 
              alt="Pouring latte art" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Accent decoration */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#8B5E3C] rounded-3xl -z-0 translate-x-4 translate-y-4" />
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#8B5E3C]"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
