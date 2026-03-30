import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogs } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function BlogsPage() {
  return (
    <div className="bg-slate-50 overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 px-6 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-ink-950 mb-6 leading-tight tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Blog</span>
          </h1>
          <p className="text-lg md:text-xl text-ink-500 leading-relaxed font-light">
            Insights, strategies, and updates from the CraftMVP team on building products that matter and scaling up your startup.
          </p>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {blogs.map((blog, index) => (
            <Link 
              href={blog.isHtml ? blog.htmlUrl : `/blogs/${blog.id}`} 
              key={blog.id} 
              className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col h-full"
              style={{ animationFillMode: 'both', animationDelay: `${index * 100}ms` }}
            >
              {/* Image Section */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {blog.tags[0]}
                  </span>
                  <span className="text-xs text-slate-400 font-medium tracking-wide">
                    {blog.date}
                  </span>
                </div>
                
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                  {blog.title}
                </h2>
                
                <p className="text-slate-600 text-base mb-8 line-clamp-3 flex-grow font-light leading-relaxed">
                  {blog.excerpt}
                </p>
                
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-sm font-bold text-slate-600">
                      {blog.author.charAt(0)}
                    </div>
                    <span className="text-sm font-semibold text-slate-800">
                      {blog.author}
                    </span>
                  </div>
                  <span className="text-blue-600 group-hover:translate-x-2 transition-transform duration-300 inline-block p-2 bg-blue-50/0 group-hover:bg-blue-50 rounded-full">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
