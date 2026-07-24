import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/content";
import { Check, ArrowRight } from "lucide-react";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className={`h-full w-full object-cover transition-all duration-500 ${
            product.secondaryImage
              ? "opacity-100 group-hover:opacity-0 group-hover:scale-110"
              : "group-hover:scale-110"
          }`}
        />
        {product.secondaryImage && (
          <img
            src={product.secondaryImage}
            alt={`${product.name} alternate view`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        {product.hp && (
          <span className="absolute right-3 top-3 rounded-full bg-accent-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
            {product.hp}
          </span>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-slate-900 transition group-hover:text-brand-700">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {product.description}
        </p>

        {/* Features */}
        <ul className="mt-4 space-y-1.5">
          {product.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-xs text-slate-500">
              <Check className="h-4 w-4 flex-shrink-0 text-brand-500" />
              {feature}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-50 px-4 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-600 hover:text-white"
        >
          Enquire Now
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

