import { blog } from '../data/portfolioData';

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const BlogCard = ({ post, aosDelay }) => (
  <a
    href={post.url}
    target="_blank"
    rel="noopener noreferrer"
    data-aos="fade-up"
    data-aos-delay={aosDelay}
    className="group flex flex-col justify-between bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_20px_50px_rgba(255,42,42,0.1)] transition-all duration-500"
  >
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-bold tracking-widest uppercase text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
          {post.platform}
        </span>
        {post.date && (
          <span className="text-white/40 text-xs font-mono font-bold tracking-wider uppercase">{post.date}</span>
        )}
      </div>
      <h3 className="text-white text-xl md:text-2xl font-black mb-3 tracking-tight group-hover:text-red-300 transition-colors">
        {post.title}
      </h3>
      <p className="text-white/60 text-sm md:text-base leading-relaxed font-medium">{post.excerpt}</p>
    </div>

    <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-sm font-semibold text-white/70 group-hover:text-white transition-colors">
      Read Article
      <ExternalLinkIcon />
    </div>
  </a>
);

const Blog = () => {
  return (
    <section id="blog" className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            {blog.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            {blog.heading}
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            {blog.description}
          </p>
        </div>

        {/* Post Grid */}
        {blog.posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blog.posts.map((post, index) => (
              <BlogCard key={post.url} post={post} aosDelay={String((index + 1) * 100)} />
            ))}
          </div>
        ) : (
          <div data-aos="fade-up" className="text-center text-white/40 text-sm font-semibold uppercase tracking-wider py-12 border border-white/10 rounded-2xl bg-white/5">
            New posts coming soon
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
