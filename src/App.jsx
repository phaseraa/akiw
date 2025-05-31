import { useState, useRef } from "react";
import { Check, Zap, Music, Clock, DollarSign, MessageCircle, Instagram, Mail, Play, Pause, Crown } from "lucide-react";
import { motion } from "framer-motion";

const Button = ({ children, className, onClick }) => (
  <button onClick={onClick} className={`px-6 py-3 rounded-xl font-bold transition-all hover:scale-105 ${className}`}>{children}</button>
);

const Badge = ({ children, className }) => (
  <span className={`inline-flex items-center text-sm font-medium px-3 py-1 rounded-full ${className}`}>{children}</span>
);

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden bg-black text-white">
    <motion.div 
      className="text-center z-10 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
        <span className="text-green-400">Custom Beats.</span><br />
        Industry Quality.<br />
        <span className="text-green-400">Independent Budget.</span>
      </h1>
      <p className="text-xl text-gray-300 mb-12">Get exclusive beats made from scratch by a Brazilian producer — for a price way below the US market.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button className="bg-green-500 text-black"> <Play className="inline-block mr-2" /> Listen to Samples</Button>
        <Button className="bg-white text-black"> <Instagram className="inline-block mr-2" /> DM on Instagram</Button>
      </div>
    </motion.div>
  </section>
);

// [...rest of the content remains unchanged for brevity...]
export default function App() {
  return (
    <div className="font-sans bg-black">
      <HeroSection />
      <SamplesSection />
      <BenefitsSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
}
