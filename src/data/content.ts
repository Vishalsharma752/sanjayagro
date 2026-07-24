export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  secondaryImage?: string;
  hp?: string;
}

export const products: Product[] = [
  {
    id: "20-120-inch-tractor-fitted-grader",
    name: "20-120 Inch Tractor Fitted Grader",
    category: "Tractor Fitted Grader",
    description:
      "Versatile and highly adjustable 20 to 120 inch tractor fitted grader designed for customizable leveling width, perfect for precise land preparation.",
    features: [
      "Adjustable 20-120 inch blade width",
      "Compatible with major tractor models",
      "Robust heavy-duty design",
      "Hydraulic leveling angles",
    ],
    image: "/sanjayagro/tractor-fitted-grade.png",
    secondaryImage: "/sanjayagro/tractor-2.png",
  },
  {
    id: "new-holland-7500-grader",
    name: "New Holland 7500 Tractor Fitted Grader",
    category: "Tractor Fitted Grader",
    description:
      "High-performance New Holland 7500 tractor fitted grader designed for precision leveling and grading operations in agricultural and construction fields.",
    features: ["Heavy-duty blade", "Hydraulic control", "Durable build", "Easy operation"],
    image: "/sanjayagro/new-holland-7500.jpg",
    hp: "75 HP",
  },
];


export interface Testimonial {
  id: number;
  name: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maruti Reddy",
    text: "Impeccable attention to detail. It's clear that quality is a top priority for this brand.",
  },
  {
    id: 2,
    name: "Tan",
    text: "Nice quality products at good prices, I will personally recommend the products.",
  },
  {
    id: 3,
    name: "G Tech Associates",
    text: "Impeccable craftsmanship, evident in every aspect.",
  },
];

export interface VideoItem {
  id: string;
  title: string;
  youtubeId: string;
}

export const videos: VideoItem[] = [
  {
    id: "1",
    title: "Tractor Fitted Grader in Action",
    youtubeId: "cvSW6G6Iojk",
  },
  {
    id: "2",
    title: "JCB Grader Working Demo",
    youtubeId: "8zrlivo1GEg",
  },
  {
    id: "3",
    title: "Hydraulic Tractor Grader",
    youtubeId: "3ygNiCtz8Q4",
  },
  {
    id: "4",
    title: "Tractor Front Dozer Operation",
    youtubeId: "1kVsk8Eudc0",
  },
];

export const stats = [
  { value: "2008", label: "Established" },
  { value: "5+", label: "Products" },
  { value: "500+", label: "Happy Clients" },
  { value: "15+", label: "Years Experience" },
];
