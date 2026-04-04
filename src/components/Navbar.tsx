"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Transportation", href: "/transportation" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-nav py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 z-50 group">
          <Image 
            src="/logo.svg" 
            alt="Logo" 
            width={48} 
            height={48} 
            className="h-10 md:h-12 w-auto object-contain" 
            priority 
          />
          <span className="text-xl md:text-2xl font-bold tracking-tight text-brand-navy group-hover:text-brand-teal transition-colors duration-300">
            Good Deeds 4 Your Needs
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "text-sm font-medium transition-colors hover:text-brand-teal relative group",
                  isActive ? "text-brand-teal" : "text-brand-navy"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-teal rounded-full"
                  />
                )}
                {!isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-teal rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-brand-navy text-white hover:bg-brand-teal transition-colors font-medium text-sm shadow-ambient"
          >
            <Phone size={16} />
            <span>Request Care</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 p-2 text-brand-navy"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg md:hidden flex flex-col p-6 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={clsx(
                  "text-lg font-medium p-2 rounded-lg transition-colors",
                  pathname === link.href
                    ? "bg-brand-teal/10 text-brand-teal"
                    : "text-brand-navy hover:bg-surface-hover"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-center space-x-2 w-full py-4 rounded-xl bg-brand-navy text-white font-medium hover:bg-brand-teal transition-colors"
            >
              <Phone size={18} />
              <span>Request Care Options</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
