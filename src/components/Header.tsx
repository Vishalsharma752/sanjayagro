"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Home", id: "hero" },
  { href: "#about", label: "About", id: "about" },
  { href: "#products", label: "Products", id: "products" },
  { href: "#videos", label: "Videos", id: "videos" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ["hero", "about", "products", "videos", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="hidden bg-brand-800 text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
          <div className="flex items-center gap-6">
            <a
              href="tel:+918766308064"
              className="flex items-center gap-2 transition hover:text-brand-200"
            >
              <Phone className="h-4 w-4" />
              +91 87663 08064
            </a>
            <a
              href="mailto:info@tisnx.com"
              className="flex items-center gap-2 transition hover:text-brand-200"
            >
              <Mail className="h-4 w-4" />
              info@tisnx.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Rajput Colony, Baripura, Vidisha, M.P. - 464001</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg"
            : "bg-white/95 shadow-md backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center"
          >
            <Image
              src="/sanjay.png"
              alt="Sanjay Agro Logo"
              width={200}
              height={55}
              className="h-10 w-auto object-contain md:h-12"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  activeSection === link.id
                    ? "bg-brand-600 text-white"
                    : "text-slate-700 hover:bg-brand-50 hover:text-brand-700"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="ml-2 rounded-lg bg-accent-500 px-5 py-2 text-sm font-bold text-white shadow-md transition hover:bg-accent-600"
            >
              Get a Quote
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-brand-700 lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="border-t border-slate-100 bg-white px-6 py-4 lg:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block rounded-lg px-4 py-3 text-sm font-semibold transition ${
                  activeSection === link.id
                    ? "bg-brand-600 text-white"
                    : "text-slate-700 hover:bg-brand-50"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="mt-2 block rounded-lg bg-accent-500 px-4 py-3 text-center text-sm font-bold text-white"
            >
              Get a Quote
            </a>
          </nav>
        )}
      </header>
    </>
  );
}

