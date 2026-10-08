import { Leaf, FlaskConical, ShieldCheck, MapPinned } from "lucide-react";

const promises = [
  {
    icon: Leaf,
    title: "Botanical Inspired",
    description:
      "Crafted with carefully selected herbs and botanicals inspired by nature.",
  },
  {
    icon: FlaskConical,
    title: "Science Backed",
    description:
      "Every formulation is thoughtfully developed for quality and effectiveness.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Effective",
    description:
      "Gentle, reliable products designed for everyday personal care.",
  },
  {
    icon: MapPinned,
    title: "Made in India",
    description:
      "Proudly developed and manufactured in India with premium ingredients.",
  },
];

function Promise() {
  return (
    <section className="bg-[#F8F6F2] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center max-w-2xl mx-auto">
          <span className="uppercase tracking-[0.35em] text-sm font-semibold text-[#1F5E4A]">
            OUR PROMISE
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-serif text-[#1A1A1A]">
            Nature Inspired.
            <br />
            Science Backed.
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            At SL Labs, we combine the wisdom of nature with thoughtful
            formulation to create products that are safe, effective and made
            with care.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {promises.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-[#1F5E4A]/20"
              >
                {/* Icon */}

                <div className="mx-auto w-20 h-20 rounded-full bg-[#EDF7F1] flex items-center justify-center group-hover:bg-[#1F5E4A] transition-all duration-300">
                  <Icon
                    size={34}
                    className="text-[#1F5E4A] group-hover:text-white transition-all duration-300"
                  />
                </div>

                {/* Title */}

                <h3 className="mt-6 text-xl font-semibold text-[#1A1A1A]">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-4 text-gray-600 leading-7 text-sm">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Promise;
