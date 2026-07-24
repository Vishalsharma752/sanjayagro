import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { products, testimonials, videos } from "@/data/content";
import { ArrowRight, Play, Quote, Phone, MapPin, Mail, Clock } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="scroll-smooth">
        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about" className="section-pattern bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Image */}
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="/sanjayagro/about-03.jpg"
                    alt="Sanjay Agro office consultation"
                    className="h-[500px] w-full object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-brand-600 p-6 text-white shadow-xl lg:block">
                  <div className="text-4xl font-extrabold">15+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
                <div className="absolute -left-6 -top-6 hidden rounded-2xl bg-accent-500 p-6 text-white shadow-xl lg:block">
                  <div className="text-4xl font-extrabold">500+</div>
                  <div className="text-sm">Happy Clients</div>
                </div>
              </div>

              {/* Content */}
              <div>
                <SectionHeading
                  highlight="About Us"
                  title="About Sanjay Agro"
                  center={false}
                />
                <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                  <p>
                    Established in the year <strong className="text-brand-700">2008</strong>,
                    we at Sanjay Agro are a renowned Manufacturer, Supplier, and
                    Wholesaler of a wide range of high-quality agricultural and
                    construction equipment.
                  </p>
                  <p>
                    Our product range includes{" "}
                    <strong>20-120 Inch Tractor Fitted Grader</strong>,{" "}
                    <strong>New Holland 7500 Tractor Fitted Grader</strong>,{" "}
                    <strong>50 HP / 55 HP / 75 HP Tractor Graders</strong>, and{" "}
                    <strong>Hydraulic Tractor Grader</strong>.
                  </p>
                  <p>
                    Under the supervision of{" "}
                    <strong className="text-brand-700">Mr. Tarun Sharma</strong>, our
                    firm is achieving new heights of success by providing
                    superior quality products and excellent customer service.
                  </p>
                </div>

                {/* Feature list */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    { icon: "🏭", title: "Manufacturing", desc: "In-house production" },
                    { icon: "✅", title: "Quality Assured", desc: "Tested products" },
                    { icon: "🚚", title: "Timely Delivery", desc: "Pan India supply" },
                    { icon: "💬", title: "24/7 Support", desc: "After sales service" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3 rounded-xl bg-brand-50 p-4">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <div className="font-bold text-slate-800">{item.title}</div>
                        <div className="text-xs text-slate-500">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="#products"
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-brand-700"
                >
                  Explore Our Products
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              highlight="Our Product Range"
              title="Quality Agricultural & Construction Equipment"
              subtitle="We will send you the Best Price Possible. Explore our wide range of high-quality tractor graders, dozers, and specialized machines."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-choose-us" className="bg-brand-800 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center">
              <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-semibold text-brand-200">
                Why Choose Us
              </span>
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                The Sanjay Agro Advantage
              </h2>
              <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-accent-500" />
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: "🏭",
                  title: "Premium Quality",
                  desc: "Manufactured with high-grade materials and strict quality control.",
                },
                {
                  icon: "⚙️",
                  title: "Advanced Technology",
                  desc: "Modern hydraulic systems and precision engineering in every product.",
                },
                {
                  icon: "💰",
                  title: "Competitive Pricing",
                  desc: "Best prices in the market without compromising on quality.",
                },
                {
                  icon: "🤝",
                  title: "Trusted Service",
                  desc: "15+ years of experience serving 500+ satisfied clients nationwide.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-white/5 p-6 backdrop-blur-sm transition hover:bg-white/10">
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-brand-100">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section id="videos" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              highlight="Videos"
              title="Watch Our Products in Action"
              subtitle="See our tractor fitted graders, dozers, and equipment working in real field conditions."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {videos.map((video) => (
                <a
                  key={video.id}
                  href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl shadow-lg transition hover:shadow-2xl"
                >
                  <div className="aspect-video">
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt={video.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition group-hover:bg-black/30">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 shadow-xl transition group-hover:scale-110">
                      <Play className="ml-1 h-8 w-8 text-white fill-current" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-sm font-semibold text-white">{video.title}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              highlight="Testimonials"
              title="What Our Clients Say"
              subtitle="Trusted by hundreds of clients across India for quality tractor graders and equipment."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((t) => (
                <div key={t.id} className="rounded-2xl bg-white p-8 shadow-md transition hover:shadow-xl">
                  <Quote className="h-10 w-10 text-brand-200 fill-current" />
                  <p className="mt-4 text-base italic leading-relaxed text-slate-700">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{t.name}</div>
                      <div className="text-xs text-accent-500">★★★★★ Verified Buyer</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-white py-20 border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeading
              highlight="Get in Touch"
              title="Send Us an Enquiry"
              subtitle="We will send you the best price possible. Fill out the form below or call us directly!"
            />

            {/* Contact Info Cards */}
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {/* Address */}
              <div className="rounded-2xl bg-brand-50 p-6 text-center shadow-sm border border-brand-100/50">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="mt-3 text-base font-bold text-slate-900">Our Address</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                  Rajput Colony Near Ramlila Ground,<br />
                  Baripura, Vidisha,<br />
                  Madhya Pradesh - 464001, India
                </p>
              </div>

              {/* Phone */}
              <div className="rounded-2xl bg-brand-50 p-6 text-center shadow-sm border border-brand-100/50">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="mt-3 text-base font-bold text-slate-900">Call Us</h3>
                <p className="mt-1.5 text-xs text-slate-600">
                  <a href="tel:+918766308064" className="font-bold text-brand-700 transition hover:text-brand-900 text-sm">
                    +91 87663 08064
                  </a>
                </p>
              </div>

              {/* Email */}
              <div className="rounded-2xl bg-brand-50 p-6 text-center shadow-sm border border-brand-100/50">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="mt-3 text-base font-bold text-slate-900">Email Us</h3>
                <p className="mt-1.5 text-xs text-slate-600">
                  <a href="mailto:info@tisnx.com" className="font-bold text-brand-700 transition hover:text-brand-900 text-sm">
                    info@tisnx.com
                  </a>
                </p>
              </div>
            </div>

            {/* Form & Map */}
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              {/* Form */}
              <div className="rounded-2xl bg-slate-50 p-8 shadow-md border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Quick Price Quote</h3>
                <ContactForm />
              </div>

              {/* Map & Hours */}
              <div className="space-y-6 flex flex-col justify-between">
                <div className="overflow-hidden rounded-2xl shadow-md border border-slate-200 h-64 lg:h-72">
                  <iframe
                    src="https://www.google.com/maps?q=Vidisha,Madhya+Pradesh,India&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sanjay Agro Location"
                  />
                </div>
                <div className="rounded-2xl bg-brand-800 p-6 text-white shadow-md">
                  <div className="flex items-center gap-2 text-lg font-bold text-white mb-4">
                    <Clock className="h-5 w-5 text-accent-500" />
                    Business Hours
                  </div>
                  <ul className="space-y-2 text-xs">
                    <li className="flex justify-between border-b border-white/10 pb-2">
                      <span>Monday - Friday</span>
                      <span className="font-semibold text-brand-100">9:00 AM - 7:00 PM</span>
                    </li>
                    <li className="flex justify-between border-b border-white/10 pb-2">
                      <span>Saturday</span>
                      <span className="font-semibold text-brand-100">9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-semibold text-brand-100">Closed</span>
                    </li>
                  </ul>
                  <div className="mt-4 rounded-xl bg-white/10 p-3.5">
                    <p className="text-xs">
                      <strong className="text-accent-500">Note:</strong> We will send
                      you the best price possible for all our products. Contact us
                      today!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

