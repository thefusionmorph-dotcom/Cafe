
import React from 'react';
import { Coffee, Instagram, Twitter, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2D241E] text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <Coffee size={20} />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight">L'ARTISTE</span>
            </div>
            <p className="text-white/60 max-w-sm mb-8 leading-relaxed">
              We believe coffee is more than just a drink; it's a sensory journey and a catalyst for creativity. Join us in our sanctuary of flavor.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#2D241E] transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Our Menu</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Private Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wholesale</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6">Contact</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-[#8B5E3C]" />
                <span>123 Artisan Alley, Seattle, WA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#8B5E3C]" />
                <span>+1 (206) 555-0123</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#8B5E3C]" />
                <span>hello@lartiste.cafe</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-widest font-bold">
          <p>© 2024 L'ARTISTE CAFE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
