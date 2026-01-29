'use client';

import { ArrowRight, Play, Lock, Zap, CreditCard } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative py-24 bg-linear-to-r from-[#3b82f6] via-purple-600 to-[#8b5cf6] overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-800/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 max-w-5xl text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to transform your workflow?
        </h2>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Join 10,000+ teams already using Smork to deliver projects faster
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button className="group bg-white text-blue-600 px-10 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition-all duration-300 shadow-2xl flex items-center gap-2">
            Start Free Trial
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button className="group bg-transparent border-2 border-white text-white px-10 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center gap-2">
            <Play size={20} fill="currentColor" />
            Schedule a Demo
          </button>
        </div>

        {/* Small Text */}
        <p className="text-white/80 text-sm mb-10">
          No credit card required • 14-day free trial • Cancel anytime
        </p>

        {/* Trust Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/90">
          <div className="flex items-center gap-2">
            <Lock size={20} />
            <span className="text-sm font-medium">Bank-level security</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap size={20} />
            <span className="text-sm font-medium">Setup in 5 minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard size={20} />
            <span className="text-sm font-medium">No credit card needed</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;