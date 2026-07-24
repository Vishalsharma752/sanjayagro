import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanjay Agro - Tractor Fitted Grader Manufacturer & Supplier from Vidisha",
  description:
    "Sanjay Agro is a leading Manufacturer, Supplier & Wholesaler of Tractor Fitted Graders, Hydraulic Tractor Graders, and agricultural equipment. Based in Vidisha, Madhya Pradesh. Established 2008.",
  keywords: [
    "Tractor Fitted Grader",
    "New Holland 7500 Tractor Grader",
    "Hydraulic Tractor Grader",
    "Sanjay Agro",
    "Vidisha",
    "Madhya Pradesh",
    "Tractor Grader Manufacturer",
  ],
  openGraph: {
    title: "Sanjay Agro - Tractor Fitted Grader Manufacturer & Supplier",
    description:
      "Manufacturer, Supplier & Wholesaler of Tractor Fitted Graders and agricultural equipment. Based in Vidisha, Madhya Pradesh.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-slate-800 antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
