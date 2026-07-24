"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  "/slide-hero-2.jpg",
  "/new-holland-7500.jpg",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full aspect-[1200/360] bg-zinc-900 overflow-hidden group">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, idx) => (
          <div
            key={slide}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide}
              alt={`Sanjay Agro Banner ${idx + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition opacity-0 group-hover:opacity-100 hover:bg-black/60"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition opacity-0 group-hover:opacity-100 hover:bg-black/60"
        aria-label="Next slide"
      >
        <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-3 md:bottom-4 left-1/2 z-20 -translate-x-1/2 flex gap-1.5 md:gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 w-1.5 md:h-2 md:w-2 rounded-full transition-all duration-300 ${
              idx === currentSlide ? "bg-accent-500 w-4 md:w-5" : "bg-white/60 hover:bg-white"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
