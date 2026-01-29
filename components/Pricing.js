'use client';

import { Check, Zap } from 'lucide-react';
import { useState } from 'react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);

  const plans = [
    {
      name: "Basic",
      nameColor: "text-slate-500",
      price: "$0",
      period: "per user/month",
      description: "Perfect for trying Smork",
      features: [
        "Up to 3 projects",
        "5 team members",
        "Basic task management",
        "5GB storage",
        "Community support"
      ],
      buttonText: "Get Started Free",
      buttonStyle: "bg-white text-[#2F9AF8] border-2 border-[#2F9AF8] hover:bg-[#2F9AF8] hover:text-white",
      popular: false
    },
    {
      name: "Professional",
      nameColor: "text-purple-600",
      price: isYearly ? "$12" : "$15",
      period: "per user/month",
      billing: isYearly ? "Billed annually" : "Billed monthly",
      description: "For growing teams",
      features: [
        "Unlimited projects",
        "Unlimited team members",
        "Advanced analytics",
        "100GB storage",
        "Automation & integrations",
        "Priority support",
        "Custom fields"
      ],
      buttonText: "Start Free Trial",
      buttonStyle: "bg-gradient-to-r from-[#2F9AF8] to-blue-600 text-white hover:scale-105",
      popular: true,
      gradient: true
    },
    {
      name: "Enterprise",
      nameColor: "text-slate-500",
      price: "Custom",
      period: "Contact sales",
      description: "For large organizations",
      features: [
        "Everything in Pro, plus:",
        "Unlimited storage",
        "Advanced security (SSO, SAML)",
        "Custom integrations",
        "Dedicated account manager",
        "SLA guarantee",
        "Custom training",
        "API access"
      ],
      buttonText: "Contact Sales",
      buttonStyle: "bg-white text-[#2F9AF8] border-2 border-[#2F9AF8] hover:bg-[#2F9AF8] hover:text-white",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold uppercase tracking-wider mb-4">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-slate-600 text-xl mb-8">
            No hidden fees. Cancel anytime.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-lg font-semibold ${!isYearly ? 'text-slate-800' : 'text-slate-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                isYearly ? 'bg-[#2F9AF8]' : 'bg-slate-300'
              }`}
            >
              <div
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                  isYearly ? 'translate-x-8' : ''
                }`}
              ></div>
            </button>
            <span className={`text-lg font-semibold ${isYearly ? 'text-slate-800' : 'text-slate-400'}`}>
              Yearly
              <span className="ml-2 text-sm text-green-600 font-bold">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-10 transition-all duration-300 ${
                plan.popular
                  ? 'shadow-2xl scale-105 border-2 border-transparent bg-linear-to-br from-[#2F9AF8]/10 via-purple-500/10 to-[#2F9AF8]/10'
                  : 'shadow-lg hover:shadow-xl border border-slate-200'
              }`}
              style={plan.gradient ? {
                background: 'white',
                borderImage: 'linear-gradient(135deg, #2F9AF8, #9333ea) 1',
                borderWidth: '3px',
                borderStyle: 'solid'
              } : {}}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-linear-to-r from-[#2F9AF8] to-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                    <Zap size={12} fill="white" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <p className={`text-sm font-semibold uppercase tracking-wider mb-4 ${plan.nameColor}`}>
                {plan.name}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-5xl font-bold text-slate-800">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span className="text-slate-500 text-sm ml-1">{plan.period}</span>
                  )}
                </div>
                {plan.billing && (
                  <p className="text-sm text-slate-500">{plan.billing}</p>
                )}
                {plan.price === "Custom" && (
                  <p className="text-sm text-slate-500">{plan.period}</p>
                )}
              </div>

              {/* Description */}
              <p className="text-slate-600 mb-6">{plan.description}</p>

              {/* Divider */}
              <div className="border-t border-slate-200 mb-6"></div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check 
                      size={20} 
                      className={`${
                        plan.popular ? 'text-[#2F9AF8]' : 'text-slate-400'
                      } shrink-0 mt-0.5`}
                      strokeWidth={3}
                    />
                    <span className="text-slate-600 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="border-t border-slate-200 mb-6"></div>

              {/* Button */}
              <button
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${plan.buttonStyle} shadow-md`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;