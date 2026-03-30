import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogs } from "@/lib/data";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    notFound();
  }

  return (
    <div className="bg-white overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-6 max-w-4xl mx-auto w-full">
        <Link 
          href="/blogs" 
          className="inline-flex items-center gap-2 text-ink-500 hover:text-blue-600 transition-colors mb-10 font-medium"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blogs
        </Link>
        <div className="mb-10 flex items-center gap-4 text-sm font-medium">
          <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
            {blog.tags[0]}
          </span>
          <span className="text-slate-500">
            {blog.date}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-ink-950 mb-8 leading-tight tracking-tight">
          {blog.title}
        </h1>

        <div className="flex items-center gap-4 mb-12 pb-10 border-b border-slate-100">
          <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-lg font-bold text-slate-600 shadow-sm">
            {blog.author.charAt(0)}
          </div>
          <div>
            <p className="font-semibold text-slate-900 text-lg">{blog.author}</p>
            <p className="text-slate-500 text-sm">Crafting MVPs</p>
          </div>
        </div>

        <div className="relative w-full h-[50vh] md:h-[60vh] rounded-3xl overflow-hidden mb-16 shadow-lg bg-slate-100">
          <Image 
            src={blog.image} 
            alt={blog.title} 
            fill
            className="object-cover"
            priority
          />
        </div>

        <article className="prose prose-lg prose-slate max-w-none text-ink-800 leading-relaxed font-light">
          <p className="text-xl md:text-2xl font-medium text-ink-900 mb-8 leading-relaxed">
            {blog.excerpt}
          </p>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <h2 className="text-2xl font-bold text-ink-950 mt-12 mb-6">Why this matters</h2>
          <p className="mb-6">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <blockquote className="border-l-4 border-blue-500 pl-6 my-10 italic text-ink-600 text-xl font-medium">
            "Innovation distinguishes between a leader and a follower. Your MVP is the first step in leading your market."
          </blockquote>
          <p className="mb-6">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
