import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  FlaskConical,
  Leaf,
  MessageCircle,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../../utils/content";
import hibiscusImage from "../../assets/images/hero/hibiscus.png";
import curryLeavesImage from "../../assets/images/hero/curry.png";
import bottleImage from "../../assets/images/hero/hero-bottle.png";

const hairGlow = products.find((product) => product.slug === "hairglow-hair-spray");
const hairOil = products.find((product) => product.slug === "hairglow-hair-oil");

const journey = [
  ["The Beginning", "An idea to create our own personal-care brand."],
  ["Exploring Formulations", "Experimenting with botanical ingredients and different formulations."],
  ["HairGlow", "Our first flagship product takes shape."],
  ["First Customers", "HairGlow reaches its first customers, and we begin learning from real-world feedback."],
  ["Growing SL Labs", "Expanding our vision beyond a single product into a complete personal-care brand."],
  ["What's Next", "New products, better formulations, and a bigger vision for SL Labs."],
];

const approach = [
  { icon: Leaf, title: "Thoughtful Ingredients", description: "We carefully consider the role and purpose of ingredients in our formulations." },
  { icon: FlaskConical, title: "Balanced Formulations", description: "We aim to create products that are practical, pleasant, and suited to everyday routines." },
  { icon: ShieldCheck, title: "Quality Focus", description: "We keep working to improve our processes, products, and customer experience." },
  { icon: RefreshCw, title: "Continuous Improvement", description: "Customer feedback helps us learn, refine, and evolve." },
];

const ingredientHighlights = [
  { name: "Rosemary", description: "An aromatic herb found in botanical care traditions.", image: "https://images.unsplash.com/photo-1464965911861-746a04bca7c8?auto=format&fit=crop&w=700&q=80", alt: "Fresh rosemary sprigs" },
  { name: "Hibiscus", description: "A flowering plant with a long place in Indian traditions.", image: hibiscusImage, alt: "Hibiscus flower" },
  { name: "Amla", description: "An Indian fruit familiar in traditional hair-care rituals.", image: "https://images.unsplash.com/photo-1501004318641-b39e6451afbe?auto=format&fit=crop&w=700&q=80", alt: "Botanical fruit and leaves" },
  { name: "Bhringraj", description: "A botanical known from traditional Indian care practices.", image: "https://images.unsplash.com/photo-1524594152303-9d1a6b4f2d64?auto=format&fit=crop&w=700&q=80", alt: "Green botanical leaves" },
  { name: "Curry Leaf", description: "An aromatic leaf and a familiar part of Indian kitchens.", image: curryLeavesImage, alt: "Fresh curry leaves" },
  { name: "Aloe Vera", description: "A succulent widely used in personal-care products.", image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=700&q=80", alt: "Aloe vera plant" },
  { name: "Panthenol", description: "A conditioning ingredient used in personal-care formulations.", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=80", alt: "Personal-care formulation bottles" },
];

const values = [
  ["Nature", "Inspired by botanical ingredients."],
  ["Care", "Attention to products and customer experience."],
  ["Transparency", "Clear and honest communication."],
  ["Growth", "Always learning, improving, and evolving."],
];

const reviewSlots = ["01", "02", "03"];

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, light = false }) {
  return <p className={`text-xs font-semibold uppercase tracking-[0.24em] ${light ? "text-[#E5C99F]" : "text-[#9A7040]"}`}>{children}</p>;
}

export function AboutHero() {
  return (
    <section className="bg-[#F8F8F5]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-12 sm:py-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8 lg:py-20">
        <Reveal className="max-w-xl">
          <Eyebrow>SL Labs · An Indian personal-care brand</Eyebrow>
          <h1 className="mt-5 font-serif text-5xl leading-[1.04] text-[#1F3A2D] sm:text-6xl">
            Rooted in Nature. <em className="font-normal">Made for Everyday Care.</em>
          </h1>
          <p className="mt-6 text-base leading-7 text-[#5E665E] sm:text-lg sm:leading-8">
            SL Labs is a growing Indian personal-care brand inspired by botanical ingredients and created with a focus on thoughtful formulations, quality and everyday self-care.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link to={`/products/${hairGlow?.slug ?? "hairglow-hair-spray"}`} className="inline-flex min-h-12 items-center gap-3 bg-[#1F3A2D] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#315844]">
              Explore HairGlow <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="#our-journey" className="inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-[#1F3A2D] transition hover:text-[#9A7040]">
              Our Journey <ArrowDown className="h-4 w-4" />
            </a>
          </div>
          <a href="#who-we-are" className="mt-12 inline-flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-[#798078]">
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C8CEC5]"><ArrowDown className="h-4 w-4" /></span>
            Scroll to discover
          </a>
        </Reveal>
        <Reveal delay={0.1} className="relative">
          <figure className="relative overflow-hidden bg-[#E9EDE5]">
            <img src={hairGlow?.image ?? bottleImage} alt="HairGlow Hair Spray, the flagship product from SL Labs" fetchPriority="high" className="aspect-[4/3] w-full object-cover sm:aspect-[5/4]" />
            <figcaption className="absolute bottom-4 left-4 bg-[#F8F8F5]/95 px-4 py-3 sm:bottom-6 sm:left-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9A7040]">Our first product</p>
              <p className="mt-1 font-serif text-lg text-[#1F3A2D]">HairGlow Hair Spray</p>
            </figcaption>
          </figure>
          <span aria-hidden="true" className="absolute -bottom-3 -right-3 -z-10 h-2/3 w-2/3 bg-[#E9EDE5]" />
        </Reveal>
      </div>
    </section>
  );
}

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="scroll-mt-24 bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[1fr_0.9fr] lg:gap-20 lg:px-8 lg:py-28">
        <Reveal className="order-2 lg:order-1">
          <img src={bottleImage} alt="A botanical hair-care bottle styled with natural ingredients" loading="lazy" className="aspect-[5/4] w-full object-cover" />
        </Reveal>
        <Reveal delay={0.08} className="order-1 max-w-xl lg:order-2">
          <Eyebrow>Who we are</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#1F3A2D] sm:text-5xl">Building personal care, one thoughtful product at a time.</h2>
          <p className="mt-6 text-base leading-8 text-[#626A62]">SL Labs is an emerging Indian personal-care brand built around a simple idea: create thoughtful products that fit naturally into everyday self-care routines.</p>
          <p className="mt-4 text-base leading-8 text-[#626A62]">We explore botanical ingredients, formulation techniques and customer feedback to continuously develop and improve our products. HairGlow, our flagship hair-care product, is where our journey began.</p>
        </Reveal>
      </div>
    </section>
  );
}

export function WhyWeStarted() {
  return (
    <section className="bg-[#E9EDE5]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <Reveal className="max-w-3xl">
          <Eyebrow>Why we started</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#1F3A2D] sm:text-5xl">Curiosity became a beginning.</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#5F685F]">SL Labs started with curiosity, experimentation and the desire to build something of our own. We wanted to explore botanical ingredients and turn that inspiration into products that people could easily incorporate into their everyday routines.</p>
        </Reveal>
        <Reveal delay={0.08} className="mt-12 border-y border-[#BFC8BD] py-8 sm:py-12">
          <p className="max-w-5xl font-serif text-4xl leading-tight text-[#1F3A2D] sm:text-6xl">“Start small. Learn continuously. <em className="font-normal">Build with purpose.</em>”</p>
        </Reveal>
      </div>
    </section>
  );
}

export function JourneyTimeline() {
  return (
    <section id="our-journey" className="scroll-mt-24 bg-[#F8F8F5]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <Reveal className="max-w-2xl">
          <Eyebrow>Our journey</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl text-[#1F3A2D] sm:text-5xl">Still becoming.</h2>
          <p className="mt-4 text-base leading-7 text-[#70766F]">A growing story, shaped by making, listening and learning as we go.</p>
        </Reveal>
        <ol className="mt-12 grid gap-x-7 gap-y-8 border-l border-[#C9D0C6] pl-6 sm:mt-16 md:grid-cols-2 md:border-l-0 md:pl-0 xl:grid-cols-3">
          {journey.map(([title, description], index) => (
            <motion.li key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.4, delay: (index % 3) * 0.07 }} className="relative border-[#C9D0C6] pb-2 md:border-t md:pt-6">
              <span className="absolute -left-[30px] top-0 h-3 w-3 rounded-full border-2 border-[#F8F8F5] bg-[#9A7040] md:-top-[7px] md:left-0 md:h-3.5 md:w-3.5" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7040]">0{index + 1}</span>
              <h3 className="mt-3 font-serif text-2xl text-[#1F3A2D]">{title}</h3>
              <p className="mt-2 max-w-sm text-sm leading-7 text-[#697169]">{description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function HairGlowStory() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:px-8 lg:py-24">
        <Reveal className="relative">
          <img src={hairGlow?.image ?? bottleImage} alt="HairGlow Hair Spray product photograph" loading="lazy" className="aspect-[4/3] w-full bg-[#E9EDE5] object-cover" />
          <span className="absolute left-4 top-4 bg-[#F8F8F5] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1F3A2D]">HairGlow · Flagship</span>
        </Reveal>
        <Reveal delay={0.08} className="max-w-xl">
          <Eyebrow>Where it began</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#1F3A2D] sm:text-5xl">HairGlow — the beginning of the SL Labs journey.</h2>
          <p className="mt-6 text-base leading-8 text-[#626A62]">HairGlow was the product that helped turn the SL Labs idea into a real customer-facing brand. It remains the starting point for a wider exploration of botanical personal care.</p>
          <Link to={`/products/${hairGlow?.slug ?? "hairglow-hair-spray"}`} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1F3A2D] transition hover:gap-4 hover:text-[#9A7040]">Discover HairGlow <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
      </div>
    </section>
  );
}

export function OurApproach() {
  return (
    <section className="bg-[#F8F8F5]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <Reveal className="max-w-2xl"><Eyebrow>Our approach</Eyebrow><h2 className="mt-4 font-serif text-4xl text-[#1F3A2D] sm:text-5xl">Made with thought. Improved with time.</h2></Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {approach.map((item, index) => {
            const Icon = item.icon;
            return <Reveal key={item.title} delay={index * 0.06}><article className="h-full border border-[#E0E3DC] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#BFC9BC] sm:p-7"><Icon className="h-6 w-6 text-[#9A7040]" strokeWidth={1.5} /><h3 className="mt-7 font-serif text-2xl text-[#1F3A2D]">{item.title}</h3><p className="mt-3 text-sm leading-7 text-[#697169]">{item.description}</p></article></Reveal>;
          })}
        </div>
      </div>
    </section>
  );
}

export function IngredientsShowcase() {
  return (
    <section id="ingredients" className="scroll-mt-24 bg-[#E9EDE5]">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl"><Eyebrow>Ingredient inspirations</Eyebrow><h2 className="mt-4 font-serif text-4xl text-[#1F3A2D] sm:text-5xl">Inspired by botanicals.</h2><p className="mt-4 text-sm leading-7 text-[#697169]">A few ingredients and formulation ideas that inform our world. This is not a complete ingredient list for every product; please refer to individual product labels for formula details.</p></div>
          <a href="#ingredient-gallery" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#1F3A2D] transition hover:gap-4">Explore Our Ingredients <ArrowRight className="h-4 w-4" /></a>
        </Reveal>
        <div id="ingredient-gallery" className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-5 sm:mt-14 sm:gap-5">
          {ingredientHighlights.map((ingredient, index) => <Reveal key={ingredient.name} delay={(index % 4) * 0.04} className="min-w-[220px] max-w-[260px] flex-1 snap-start sm:min-w-[240px]"><article className="h-full border border-[#D6DDD3] bg-[#F8F8F5] p-3"><img src={ingredient.image} alt={ingredient.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" /><div className="px-2 pb-3 pt-4"><h3 className="font-serif text-xl text-[#1F3A2D]">{ingredient.name}</h3><p className="mt-2 text-xs leading-6 text-[#6A726A]">{ingredient.description}</p></div></article></Reveal>)}
        </div>
      </div>
    </section>
  );
}

export function OurValues() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1F3A2D] text-white">
      <img src={curryLeavesImage} alt="" aria-hidden="true" loading="lazy" className="absolute right-0 top-0 -z-10 h-full w-full object-cover object-center opacity-[0.12]" />
      <div className="absolute inset-0 -z-10 bg-[#1F3A2D]/75" />
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <Reveal className="max-w-2xl"><Eyebrow light>What we believe</Eyebrow><h2 className="mt-4 font-serif text-4xl sm:text-5xl">The principles we grow by.</h2></Reveal>
        <div className="mt-12 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {values.map(([title, description], index) => <Reveal key={title} delay={index * 0.06}><article className="border-t border-white/30 pt-5"><h3 className="font-serif text-3xl">{title}</h3><p className="mt-3 max-w-xs text-sm leading-7 text-white/75">{description}</p></article></Reveal>)}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <Reveal className="flex flex-col gap-6 border-b border-[#E0E3DC] pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div><Eyebrow>Customer love</Eyebrow><h2 className="mt-4 font-serif text-4xl text-[#1F3A2D] sm:text-5xl">Made for people, improved by feedback.</h2></div>
          <div className="sm:text-right"><p className="font-serif text-4xl text-[#1F3A2D]">100s</p><p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#777D75]">HairGlow bottles sold</p></div>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {reviewSlots.map((number, index) => <Reveal key={number} delay={index * 0.07}><article className="h-full border border-dashed border-[#C9D0C6] bg-[#F8F8F5] p-6 sm:p-7"><MessageCircle className="h-5 w-5 text-[#9A7040]" strokeWidth={1.5} /><p className="mt-6 font-serif text-xl leading-7 text-[#536054]">Add a verified customer testimonial here.</p><p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A9189]">Review placeholder {number} · Customer name to be added</p></article></Reveal>)}
        </div>
      </div>
    </section>
  );
}

export function FounderSection() {
  return (
    <section className="bg-[#F8F8F5]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 sm:py-24 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 lg:px-8 lg:py-28">
        <Reveal><div className="relative flex aspect-[4/5] max-h-[520px] items-center justify-center overflow-hidden bg-[#E5E9E1]"><img src={hibiscusImage} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" /><div className="absolute inset-0 bg-[#1F3A2D]/15" /><div className="relative flex flex-col items-center text-[#1F3A2D]"><UserRound className="h-20 w-20" strokeWidth={1} /><span className="mt-4 bg-[#F8F8F5]/90 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.17em]">Founder portrait placeholder</span></div></div></Reveal>
        <Reveal delay={0.08} className="max-w-2xl"><Eyebrow>A personal beginning</Eyebrow><h2 className="mt-4 font-serif text-4xl leading-tight text-[#1F3A2D] sm:text-5xl">The person behind SL Labs.</h2><p className="mt-6 text-base leading-8 text-[#626A62]">SL Labs began as an idea to build something of our own around products we genuinely wanted to develop. What started with experimentation and a single product is growing into a larger vision for an Indian personal-care brand.</p><p className="mt-4 text-base leading-8 text-[#626A62]">The work is personal: listen closely, keep learning, and make each next step with care.</p><div className="mt-8 border-t border-[#D8DDD5] pt-5"><p className="font-serif text-xl text-[#1F3A2D]">Founder name to be added</p><p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#777D75]">Founder, SL Labs</p></div></Reveal>
      </div>
    </section>
  );
}

export function FutureVision() {
  return (
    <section className="bg-[#E9EDE5]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:px-8 lg:py-24">
        <Reveal className="max-w-xl"><Eyebrow>What's next</Eyebrow><h2 className="mt-4 font-serif text-4xl leading-tight text-[#1F3A2D] sm:text-6xl">We're Just Getting Started.</h2><p className="mt-6 text-base leading-8 text-[#5F685F]">Our journey is still at the beginning. We're continuing to explore new products, improve our formulations and build SL Labs into a thoughtful personal-care brand that people can trust.</p><Link to="/products" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#1F3A2D] transition hover:gap-4">Explore Our Products <ArrowRight className="h-4 w-4" /></Link></Reveal>
        <Reveal delay={0.08}><img src={hairOil?.image ?? bottleImage} alt="SL Labs HairGlow botanical hair oil product" loading="lazy" className="aspect-[5/4] w-full object-cover" /></Reveal>
      </div>
    </section>
  );
}

export function AboutCTA() {
  return (
    <section className="bg-[#1F3A2D] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 sm:py-20 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="max-w-2xl"><Eyebrow light>Growing with purpose</Eyebrow><h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Discover the SL Labs Experience.</h2></div>
        <div className="flex flex-wrap gap-3"><Link to={`/products/${hairGlow?.slug ?? "hairglow-hair-spray"}`} className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#F3EEE5] px-5 py-3 text-sm font-semibold text-[#1F3A2D] transition hover:bg-white">Shop HairGlow <ArrowRight className="h-4 w-4" /></Link><Link to="/products" className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/50 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10">Explore SL Labs <Sparkles className="h-4 w-4" /></Link></div>
      </div>
    </section>
  );
}