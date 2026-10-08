import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Share2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../utils/blogs";

function BlogPost() {
  const { slug } = useParams();
  const [shareLabel, setShareLabel] = useState("Share article");
  const article = blogPosts.find((post) => post.slug === slug);

  useEffect(() => {
    if (!article) return undefined;

    const previousTitle = document.title;
    document.title = `${article.title} | SL Labs Journal`;
    return () => {
      document.title = previousTitle;
    };
  }, [article]);

  const handleShare = async () => {
    const shareData = {
      title: article.title,
      text: article.excerpt,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error.name === "AbortError") return;
      }
    }

    try {
      await navigator.clipboard.writeText(shareData.url);
      setShareLabel("Link copied");
      window.setTimeout(() => setShareLabel("Share article"), 2200);
    } catch {
      setShareLabel("Copy the link from your address bar");
    }
  };

  if (!article) {
    return (
      <main className="min-h-[70vh] bg-[#F8F8F5] px-6 pt-36 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A7040]">
          SL Labs Journal
        </p>
        <h1 className="mt-4 font-serif text-4xl text-[#1F3A2D]">Story not found</h1>
        <Link to="/blogs" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#1F3A2D]">
          <ArrowLeft className="h-4 w-4" /> Back to the journal
        </Link>
      </main>
    );
  }

  const relatedArticles = blogPosts.filter((post) => post.slug !== article.slug).slice(0, 2);

  return (
    <main className="min-h-screen bg-[#F8F8F5] pt-20 text-[#222222]">
      <div className="mx-auto max-w-5xl px-6 py-10 lg:px-8">
        <Link to="/blogs" className="inline-flex items-center gap-2 text-sm font-semibold text-[#536054] transition hover:text-[#9A7040]">
          <ArrowLeft className="h-4 w-4" /> All stories
        </Link>
      </div>

      <article className="mx-auto max-w-5xl px-6 pb-16 lg:px-8 lg:pb-24">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A7040]">
            {article.category} <span className="px-2">·</span> {article.readTime}
          </p>
          <h1 className="mt-5 font-serif text-4xl leading-tight text-[#1F3A2D] sm:text-6xl">
            {article.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#666D66] sm:text-lg">
            {article.excerpt}
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm text-[#777D75]">
            <span>{article.author}</span>
            <span aria-hidden="true">·</span>
            <time>{article.date}</time>
          </div>
        </header>

        <img
          src={article.image}
          alt={article.imageAlt}
          className="mt-10 aspect-[16/9] w-full object-cover sm:mt-14"
        />

        <div className="mx-auto max-w-2xl py-10 sm:py-14">
          <p className="font-serif text-2xl leading-9 text-[#465348]">{article.excerpt}</p>
          <div className="mt-7 space-y-6 text-base leading-8 text-[#555E56]">
            {article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          <div className="mt-10 border-y border-[#DADDD5] py-5">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#1F3A2D] transition hover:text-[#9A7040]"
            >
              {shareLabel === "Link copied" ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
              {shareLabel}
            </button>
          </div>
        </div>
      </article>

      <section className="bg-[#E9EDE5]">
        <div className="mx-auto max-w-5xl px-6 py-14 lg:px-8 lg:py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9A7040]">Keep exploring</p>
              <h2 className="mt-3 font-serif text-3xl text-[#1F3A2D]">More from the journal</h2>
            </div>
            <Link to="/blogs" className="hidden items-center gap-2 text-sm font-semibold text-[#1F3A2D] sm:inline-flex">
              All stories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {relatedArticles.map((post) => (
              <Link key={post.slug} to={`/blogs/${post.slug}`} className="group grid grid-cols-[120px_1fr] gap-4 border-t border-[#C9D0C6] pt-4 sm:grid-cols-[160px_1fr]">
                <img src={post.image} alt={post.imageAlt} loading="lazy" className="aspect-square h-full w-full object-cover" />
                <div className="py-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9A7040]">{post.category}</p>
                  <h3 className="mt-2 font-serif text-xl leading-snug text-[#1F3A2D] group-hover:text-[#9A7040]">{post.title}</h3>
                  <p className="mt-2 text-xs text-[#777D75]">{post.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogPost;