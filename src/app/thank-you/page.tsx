"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowLeft, Phone, Mail, FileText, Clock, ShieldCheck } from "lucide-react";

function ThankYouInner() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const subject = searchParams.get("subject");

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 text-center">
      {/* Success Icon */}
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600 shadow-inner">
        <CheckCircle2 className="h-12 w-12 animate-bounce" />
      </div>

      {/* Main Title */}
      <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
        Thank You{name ? `, ${name}` : ""}!
      </h1>
      <p className="mt-3 text-base font-medium text-slate-600 sm:text-lg">
        Your enquiry has been successfully received by <span className="font-bold text-brand-700">Sanjay Agro</span>.
      </p>

      {subject && (
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand-800 border border-brand-200">
          <FileText className="h-4 w-4 text-brand-600" />
          Subject: {subject}
        </div>
      )}

      {/* Details Box */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 text-left shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3 mb-4">
          What Happens Next?
        </h2>

        <div className="space-y-4 text-sm text-slate-700">
          <div className="flex items-start gap-3">
            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
              1
            </div>
            <div>
              <p className="font-bold text-slate-900">Enquiry Review</p>
              <p className="text-slate-600 text-xs mt-0.5">
                Our sales team under Mr. Tarun Sharma will review your requested machinery specifications and requirements.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
              2
            </div>
            <div>
              <p className="font-bold text-slate-900">Best Price Quote Preparation</p>
              <p className="text-slate-600 text-xs mt-0.5">
                We prepare the most competitive factory-direct price quote along with delivery schedules.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
              3
            </div>
            <div>
              <p className="font-bold text-slate-900">Direct Contact Within 24 Hours</p>
              <p className="text-slate-600 text-xs mt-0.5">
                We will call or email you back directly with complete quotation details.
              </p>
            </div>
          </div>
        </div>

        {/* Urgent Contact Callout */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl bg-brand-700 p-4 text-white">
          <div className="flex items-center gap-3 text-left">
            <Phone className="h-6 w-6 text-accent-400 flex-shrink-0" />
            <div>
              <p className="text-xs font-medium text-brand-100">Need Immediate Assistance?</p>
              <p className="text-sm font-bold text-white">Call Us: +91 87663 08064</p>
            </div>
          </div>
          <a
            href="tel:+918766308064"
            className="w-full sm:w-auto rounded-lg bg-accent-500 px-4 py-2 text-center text-xs font-bold text-white transition hover:bg-accent-600 shadow"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* Badges */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-semibold text-slate-600">
        <div className="flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-200 p-3 shadow-xs">
          <ShieldCheck className="h-4 w-4 text-brand-600" />
          Quality Assured
        </div>
        <div className="flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-200 p-3 shadow-xs">
          <Clock className="h-4 w-4 text-brand-600" />
          Quick Response
        </div>
        <div className="flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-200 p-3 shadow-xs col-span-2 sm:col-span-1">
          <Mail className="h-4 w-4 text-brand-600" />
          Pan India Supply
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-brand-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Homepage
        </Link>
        <Link
          href="/#products"
          className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-50"
        >
          Explore More Products
        </Link>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] bg-slate-50/50 flex items-center justify-center">
        <Suspense fallback={
          <div className="py-20 text-center text-slate-500 font-medium">Loading...</div>
        }>
          <ThankYouContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

function ThankYouContent() {
  return <ThankYouInner />;
}
