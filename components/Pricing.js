'use client';

import { Check, Zap } from 'lucide-react';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });

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

  // Header animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  // Container for staggered cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Card animation variants - center card gets special treatment
  const cardVariants = (isPopular) => ({
    hidden: { 
      opacity: 0, 
      y: isPopular ? 80 : 60,
      scale: isPopular ? 0.85 : 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: isPopular ? 1.05 : 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  });

  // Feature list stagger
  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: 0.6 + i * 0.05,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section 
      id="pricing" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headerVariants}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold uppercase tracking-wider mb-4"
          >
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6"
          >
            Simple, transparent pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="text-slate-600 text-xl mb-8"
          >
            No hidden fees. Cancel anytime.
          </motion.p>

          {/* Toggle Switch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="flex items-center justify-center gap-4"
          >
            <span className={`text-lg font-semibold transition-colors duration-150 ${!isYearly ? 'text-slate-800' : 'text-slate-400'}`}>
              Monthly
            </span>
            <motion.button
              aria-label="Toggle billing period"
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-150 ${
                isYearly ? 'bg-[#2F9AF8]' : 'bg-slate-300'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                layout
                className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md"
                animate={{
                  x: isYearly ? 32 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            </motion.button>
            <span className={`text-lg font-semibold transition-colors duration-150 ${isYearly ? 'text-slate-800' : 'text-slate-400'}`}>
              Yearly
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: isYearly ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="ml-2 text-sm text-green-600 font-bold inline-block"
              >
                Save 20%
              </motion.span>
            </span>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants(plan.popular)}
              whileHover={{ 
                y: plan.popular ? -12 : -8,
                transition: { duration: 0.3 }
              }}
              className={`relative bg-white rounded-3xl p-10 transition-all duration-150 ${
                plan.popular
                  ? 'shadow-2xl border-2 border-transparent'
                  : 'shadow-lg hover:shadow-xl border border-slate-200'
              }`}
              style={plan.gradient ? {
                background: 'white',
                borderImage: 'linear-gradient(135deg, #2F9AF8, #9333ea) 1',
                borderWidth: '3px',
                borderStyle: 'solid',
              } : {}}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    delay: 0.8,
                    type: "spring",
                    stiffness: 200,
                    damping: 10
                  }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="bg-linear-to-r from-[#2F9AF8] to-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1"
                  >
                    <motion.div
                      animate={{ rotate: [0, 15, 0] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Zap size={12} fill="white" />
                    </motion.div>
                    Most Popular
                  </motion.div>
                </motion.div>
              )}

              {/* Plan Name */}
              <p className={`text-sm font-semibold uppercase tracking-wider mb-4 ${plan.nameColor}`}>
                {plan.name}
              </p>

              {/* Price with counter animation */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1 mb-1">
                  <motion.span
                    key={plan.price}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-5xl font-bold text-slate-800"
                  >
                    {plan.price}
                  </motion.span>
                  {plan.price !== "Custom" && (
                    <span className="text-slate-500 text-sm ml-1">{plan.period}</span>
                  )}
                </div>
                {plan.billing && (
                  <motion.p
                    key={plan.billing}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-slate-500"
                  >
                    {plan.billing}
                  </motion.p>
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
                  <motion.li
                    key={idx}
                    custom={idx}
                    variants={featureVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex items-start gap-3"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Check 
                        size={20} 
                        className={`${
                          plan.popular ? 'text-[#2F9AF8]' : 'text-slate-400'
                        } shrink-0 mt-0.5`}
                        strokeWidth={3}
                      />
                    </motion.div>
                    <span className="text-slate-600 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Divider */}
              <div className="border-t border-slate-200 mb-6"></div>

              {/* Button */}
              <motion.button
                aria-label="Plan action button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-150 ${plan.buttonStyle} shadow-md`}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3, delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 text-sm">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;