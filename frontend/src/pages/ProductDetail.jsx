import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { products } from "../utils/content";

const whatsappNumber = "919621652557"; // Replace with your WhatsApp number

function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <main className="min-h-[70vh] bg-[#F8F8F5] px-6 pt-36 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B88746]">
          SL Labs Products
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-[#1F3A2D]">Product not found</h1>
        <Link to="/products" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#1F3A2D]">
          <ArrowLeft className="h-4 w-4" /> Back to products
        </Link>
      </main>
    );
  }

  const whatsappMessage = encodeURIComponent(
    `Hi SL Labs, I'm interested in buying ${product.name}.`,
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-[#F8F8F5] pt-20 text-[#222222]">
      <div className="mx-auto max-w-7xl px-6 pt-10 lg:px-8">
        <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-[#536054] transition hover:text-[#9A7040]">
          <ArrowLeft className="h-4 w-4" /> All products
        </Link>
      </div>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-10 sm:py-14 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-16">
        <div className="overflow-hidden bg-white">
          <img
            src={product.image}
            alt={product.name}
            className="aspect-square w-full object-cover"
          />
        </div>

        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B88746]">
            SL Labs · Product details
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#1F3A2D] sm:text-5xl">
            {product.name}
          </h1>
          <div className="mt-3 flex items-baseline gap-3">
            <p className="text-2xl font-semibold text-[#1F3A2D]">₹{product.price}</p>
            <p className="text-sm text-[#777D75]">
              MRP <del>₹{product.mrp}</del>
            </p>
          </div>
          <p className="mt-6 text-base leading-8 text-[#666666]">
            {product.description}
          </p>

          <div className="mt-8 border-y border-[#DADDD5] py-6">
            <h2 className="text-lg font-semibold text-[#1F3A2D]">Product benefits</h2>
            <ul className="mt-4 space-y-3">
              {product.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-sm text-[#555E56]">
                  <Check className="h-4 w-4 shrink-0 text-[#9A7040]" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 bg-[#1F3A2D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#315844]"
          >
            Buy now on WhatsApp <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-3 text-xs leading-5 text-[#777D75]">
            Continue to WhatsApp to ask about availability and place your order.
          </p>
        </div>
      </section>
    </main>
  );
}

export default ProductDetail;