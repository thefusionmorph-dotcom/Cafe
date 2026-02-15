
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Sparkles, User, Coffee } from 'lucide-react';
import { getCoffeeRecommendation } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIBarista: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const recommendation = await getCoffeeRecommendation(input);
      setMessages(prev => [...prev, { role: 'assistant', content: recommendation }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Something went wrong. Let's try again!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#2D241E] text-white rounded-full flex items-center justify-center shadow-2xl z-50 group overflow-hidden"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Sparkles className="group-hover:scale-110 transition-transform" />
        </motion.div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-28 right-8 w-[350px] max-w-[calc(100vw-32px)] h-[500px] bg-white rounded-3xl shadow-2xl z-50 flex flex-col border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#2D241E] p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Coffee size={18} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-sm">Coffee Concierge</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-[10px] opacity-70 uppercase tracking-widest font-bold">Online Now</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full">
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FDFCFB]">
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#F5E6D3] text-[#8B5E3C] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles size={24} />
                  </div>
                  <h4 className="font-serif font-bold text-lg mb-2">Hello, I'm Artiste AI</h4>
                  <p className="text-xs text-[#5A4B41] leading-relaxed">
                    Tell me about your mood or what flavors you enjoy, and I'll find your perfect brew.
                  </p>
                </div>
              )}
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                    ? 'bg-[#2D241E] text-white rounded-tr-none' 
                    : 'bg-white border border-gray-100 shadow-sm rounded-tl-none text-[#5A4B41]'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-[#8B5E3C] rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-[#8B5E3C] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-[#8B5E3C] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-100">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask for a recommendation..."
                  className="w-full pl-4 pr-12 py-3 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-[#2D241E] transition-all outline-none"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#2D241E] text-white rounded-xl flex items-center justify-center hover:bg-[#4A3B31] disabled:opacity-50 transition-all"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIBarista;
