'use client';

import React, { useRef } from 'react';
import { Facebook, Github, Instagram, Mail, MessageCircle, Phone } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { margin: "-100px" });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = sectionId === "hero" ? -120 : -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  const footerLinks = {
    product: [
      { name: 'Features', id: 'features' },
      { name: 'Benefits', id: 'benefits' },
      { name: 'How it Works', id: 'working' },
      { name: 'Pricing', id: 'pricing' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press Kit', href: '#' },
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'API Docs', href: '#' },
      { name: 'System Status', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: <Mail size={20} />, href: 'mailto:nn9117730@gmail.com', label: 'Mail' },
    { icon: <MessageCircle  size={20} />, href: 'https://wa.me/923056662137', label: 'Whatsapp' },
    { icon: <Facebook size={20} />, href: 'https://www.facebook.com/share/1KyW9CoPzv/', label: 'Facebook' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/naveedbhatti_dev?igsh=dDNkMzIycXJwY2Rn', label: 'Instagram' },
    {icon: <Github size={20} />, href: 'https://github.com/Naveed-Bhatti1', label: 'GitHub' },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const columnVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const brandVariants = {
    hidden: { 
      opacity: 0, 
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const socialVariants = {
    hidden: { scale: 0 },
    visible: (i) => ({
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.4 + i * 0.1,
      },
    }),
  };

  const newsletterVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  const bottomBarVariants = {
    hidden: { 
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.4,
      },
    },
  };

  return (
    <footer ref={footerRef} className="bg-slate-900 text-slate-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12"
        >
          {/* Brand Column */}
          <motion.div variants={brandVariants} className="lg:col-span-2">
            <motion.h2 
              onClick={() => scrollToSection('hero')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="text-3xl font-bold mb-4 cursor-pointer"
            >
              <motion.span
                animate={{
                  color: ["#2F9AF8", "#3b82f6", "#2F9AF8"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                SM
              </motion.span>
              <span className="text-white">ORK</span>
            </motion.h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              The all-in-one project management platform that helps teams collaborate, organize, and deliver faster.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  custom={index}
                  variants={socialVariants}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ 
                    scale: 1.15,
                    y: -3,
                    backgroundColor: "#2F9AF8",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-150"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Product Column */}
          <motion.div variants={columnVariants}>
            <h3 className="text-white font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                >
                  <motion.button
                    aria-label='Footer links'
                    onClick={() => scrollToSection(link.id)}
                    whileHover={{ x: 5, color: "#2F9AF8" }}
                    transition={{ duration: 0.2 }}
                    className="text-slate-400 hover:text-[#2F9AF8] transition-colors duration-150 text-left"
                  >
                    {link.name}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div variants={columnVariants}>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: "#2F9AF8" }}
                    transition={{ duration: 0.2 }}
                    className="text-slate-400 hover:text-[#2F9AF8] transition-colors duration-150"
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support Column */}
          <motion.div variants={columnVariants}>
            <h3 className="text-white font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: "#2F9AF8" }}
                    transition={{ duration: 0.2 }}
                    className="text-slate-400 hover:text-[#2F9AF8] transition-colors duration-150"
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Column */}
          <motion.div variants={columnVariants}>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: "#2F9AF8" }}
                    transition={{ duration: 0.2 }}
                    className="text-slate-400 hover:text-[#2F9AF8] transition-colors duration-150"
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          variants={newsletterVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-12 pt-8 border-t border-slate-800"
        >
          <div className="max-w-md">
            <h3 className="text-white font-bold text-lg mb-3">
              Stay updated
            </h3>
            <p className="text-slate-400 mb-4 text-sm">
              Get the latest product updates and news in your inbox.
            </p>
            <div className="flex gap-2 w-11/12">
              <motion.input
                whileFocus={{ 
                  scale: 1.02,
                  borderColor: "#2F9AF8",
                }}
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-[#2F9AF8] transition-colors"
              />
              <motion.button
                aria-label='Subscribe to newsletter'
                whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#2F9AF8] text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <motion.div
          variants={bottomBarVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="container mx-auto px-4 py-6 max-w-7xl"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© 2026 Smork. All rights reserved.</p>
            <div className="flex gap-6">
              <motion.a
                href="#"
                whileHover={{ color: "#2F9AF8", y: -2 }}
                transition={{ duration: 0.2 }}
                className="hover:text-[#2F9AF8] transition-colors"
              >
                Privacy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: "#2F9AF8", y: -2 }}
                transition={{ duration: 0.2 }}
                className="hover:text-[#2F9AF8] transition-colors"
              >
                Terms
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: "#2F9AF8", y: -2 }}
                transition={{ duration: 0.2 }}
                className="hover:text-[#2F9AF8] transition-colors"
              >
                Cookies
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;