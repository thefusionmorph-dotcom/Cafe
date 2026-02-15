
import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import AIBarista from './components/AIBarista';
import Footer from './components/Footer';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#8B5E3C] origin-left z-[60]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        {/* Animated Story Section */}
        <section id="story" className="py-24 bg-[#F5E6D3]/30">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="aspect-video rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80" 
                  alt="Cafe interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-lg hidden md:block"
              >
                <div className="text-4xl font-serif text-[#8B5E3C] font-bold">12+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#2D241E]">Years of Brewing</div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                Our Ritual, <br />
                <span className="italic">Your Sanctuary.</span>
              </h2>
              <p className="text-[#5A4B41] text-lg mb-6 leading-relaxed">
                Founded by a group of artists and baristas in 2012, L'Artiste began as a small pop-up dedicated to the simple idea that coffee should be handled with the same reverence as fine wine or oil painting.
              </p>
              <p className="text-[#5A4B41] text-lg mb-8 leading-relaxed">
                Today, we continue that legacy in our brick-and-mortar home, serving as a hub for local creators, thinkers, and those who simply appreciate a masterfully prepared cup of joe.
              </p>
              <button className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-[#8B5E3C] hover:text-[#2D241E] transition-colors">
                Learn More About Our Beans <span className="text-xl">→</span>
              </button>
            </motion.div>
          </div>
        </section>

        <MenuSection />

        {/* Call to Action Section */}
        <section className="py-32 relative overflow-hidden bg-[#2D241E]">
          <motion.div 
            initial={{ opacity: 0, scale: 1.2 }}
            whileInView={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80" 
              className="w-full h-full object-cover"
              alt="Coffee beans"
            />
          </motion.div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">
                Reserve Your Morning <br />
                <span className="italic text-[#F5E6D3]">Experience.</span>
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto mb-12 text-lg">
                Planning a gathering or need a quiet corner for your next big project? Book a table or our private loft space.
              </p>
              <button className="px-10 py-5 bg-[#F5E6D3] text-[#2D241E] rounded-full font-bold text-lg hover:bg-white transition-all transform hover:-translate-y-2">
                Make a Reservation
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <AIBarista />
    </div>
  );
};

export default App;
