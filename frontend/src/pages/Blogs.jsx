import { useMemo, useState } from "react";
import { ArrowDown, ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "../utils/blogs";

const categories = ["All stories", "Hair rituals", "Ingredients", "The science"];

export const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All stories");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return blogPosts.filter((article) => {
      const matchesCategory =
        activeCategory === "All stories" || article.category === activeCategory;
      const matchesSearch =
        !query ||
        `${article.title} ${article.excerpt} ${article.category}`
          .toLowerCase()
          .includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-[#F8F8F5] pt-20 text-[#222222]">
      <section className="relative overflow-hidden bg-[#E9EDE5]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
          <div className="relative z-10 max-w-xl">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#9A7040]">
              <span className="h-px w-8 bg-[#9A7040]" /> The SL Labs Journal
            </p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-[#1F3A2D] sm:text-6xl">
              Care, with a little more <em className="font-normal">curiosity.</em>
            </h1>
            <p className="mt-6 max-w-md text-base leading-7 text-[#596259]">
              Notes on botanicals, thoughtful hair rituals, and the science behind
              feeling good in your own routine.
            </p>
            <a
              href="#latest-stories"
              className="mt-8 inline-flex items-center gap-3 border-b border-[#1F3A2D] pb-2 text-sm font-semibold text-[#1F3A2D] transition hover:gap-5"
            >
              Explore the journal <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          <div className="relative min-h-[300px] overflow-hidden sm:min-h-[410px] lg:min-h-[480px]">
            <img
              src="https://res.cloudinary.com/dgzmz1cls/image/upload/v1791651551/HairGlow_Botanical_Spray_Editorial_Portrait_dnxooc.png"
              alt="Botanical hair-care essentials arranged among fresh leaves"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <Link
              to={`/blogs/${blogPosts[0].slug}`}
              aria-label={`Read ${blogPosts[0].title}`}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#14251d]/65 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 max-w-lg p-6 text-white sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#E5C99F]">
                  In focus · {blogPosts[0].category}
                </p>
                <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
                  {blogPosts[0].title}
                </h2>
                <p className="mt-3 text-sm text-white/80">
                  {blogPosts[0].readTime} · {blogPosts[0].date}
                </p>
              </div>
              <span className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#1F3A2D] transition hover:bg-[#E5C99F]">
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section id="latest-stories" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col justify-between gap-7 border-b border-[#DADDD5] pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A7040]">
              Read & discover
            </p>
            <h2 className="mt-3 font-serif text-4xl text-[#1F3A2D] sm:text-5xl">
              Latest stories
            </h2>
          </div>
          <label className="flex w-full items-center gap-3 border-b border-[#9BA49A] py-3 md:max-w-xs">
            <Search className="h-4 w-4 shrink-0 text-[#697469]" />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search the journal"
              aria-label="Search journal articles"
              className="w-full bg-transparent text-sm text-[#222222] outline-none placeholder:text-[#7B827A]"
            />
          </label>
        </div>

        <div className="flex gap-2 overflow-x-auto py-6" role="group" aria-label="Filter stories by category">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`shrink-0 border px-4 py-2 text-sm transition ${
                activeCategory === category
                  ? "border-[#1F3A2D] bg-[#1F3A2D] text-white"
                  : "border-[#D8DDD5] text-[#536054] hover:border-[#1F3A2D]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <article key={article.title} className="group">
                <div>
                  <Link to={`/blogs/${article.slug}`} aria-label={`Read ${article.title}`} className="block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#E6E8E1]">
                    <img
                      src={article.image}
                      alt={article.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-4 top-4 bg-[#F8F8F5] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1F3A2D]">
                      {article.category}
                    </span>
                  </div>
                  </Link>
                  <p className="mt-5 text-xs text-[#777D75]">
                    {article.date} <span className="px-1.5">·</span> {article.readTime}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl leading-snug text-[#1F3A2D] transition group-hover:text-[#9A7040]">
                    <Link to={`/blogs/${article.slug}`}>{article.title}</Link>
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#666D66]">{article.excerpt}</p>
                  <Link to={`/blogs/${article.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#1F3A2D]">
                    Read story <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="border-y border-[#DADDD5] py-16 text-center">
            <p className="font-serif text-2xl text-[#1F3A2D]">No stories found</p>
            <p className="mt-2 text-sm text-[#666D66]">Try another search or choose a different topic.</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All stories");
              }}
              className="mt-5 text-sm font-semibold text-[#9A7040] underline underline-offset-4"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

    </main>
  );
};
