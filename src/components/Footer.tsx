"use client";

import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-7">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <a
              href="#hero"
              onClick={(e) => handleScroll(e, "#hero")}
              className="inline-block bg-white px-3 py-1.5 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <Image
                src="/sanjay.png"
                alt="Sanjay Agro Logo"
                width={160}
                height={44}
                className="h-9 w-auto object-contain"
              />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-brand-200">
              Leading Manufacturer, Supplier & Wholesaler of Tractor Fitted
              Graders and Hydraulic Graders. Based in Vidisha, Madhya Pradesh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-brand-200">
              <li>
                <a href="#hero" onClick={(e) => handleScroll(e, "#hero")} className="transition hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScroll(e, "#about")} className="transition hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => handleScroll(e, "#products")} className="transition hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="#videos" onClick={(e) => handleScroll(e, "#videos")} className="transition hover:text-white">
                  Videos
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="transition hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold text-white">Our Products</h3>
            <ul className="mt-4 space-y-2 text-sm text-brand-200">
              <li>
                <a href="#products" onClick={(e) => handleScroll(e, "#products")} className="transition hover:text-white">
                  20-120 Inch Tractor Fitted Grader
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => handleScroll(e, "#products")} className="transition hover:text-white">
                  New Holland 7500 Tractor Grader
                </a>
              </li>
              <li>
                <a href="#products" onClick={(e) => handleScroll(e, "#products")} className="transition hover:text-white">
                  Hydraulic Tractor Grader
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white">Get in Touch</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-500" />
                <span className="text-brand-200">Rajput Colony Near Ramlila Ground, Baripura, Vidisha, M.P. - 464001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-accent-500" />
                <a href="tel:+918766308064" className="text-brand-200 transition hover:text-white">+91 87663 08064</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-accent-500" />
                <a href="mailto:info@tisnx.com" className="break-all text-brand-200 transition hover:text-white">info@tisnx.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-brand-700 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-brand-200 md:flex-row">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://tisnx.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-md text-sm font-black shadow-sm transition hover:scale-105"
              >
                <span className="text-[#8B0000]">TIS</span>
                <span className="text-[#000000]">Nexus</span>
              </a>

              <p>© {new Date().getFullYear()} Tis Nexus Pvt Ltd. All Rights Reserved.</p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://tisnx.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-1 shadow-sm transition hover:scale-110"
              >
                <Image
                  src="/tis-logo.png"
                  alt="TIS Nexus Logo"
                  width={26}
                  height={26}
                  className="h-full w-full object-contain rounded-full"
                />
              </a>
              <span className="text-brand-200">Design and Developed by Tis Nexus </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

