export default function BlogPostHeader() {
  return (
    <div className="bg-black text-white min-h-[400px] lg:pt-[10rem] px-6 py-12 md:px-12 lg:px-24">
      <div className="max-w-[1200px] mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-12">
          <a href="/blog" className="hover:text-gray-300 transition-colors">
            ALL BLOG POSTS
          </a>
          <span className="text-gray-500">/</span>
          <span className="text-gray-400">Development</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight mb-12">
          HOW TO BUILD A PRODUCT —{" "}
          <span className="block mt-2">
            A FULL GUIDE TO THE PRODUCT DEVELOPMENT PROCESS
          </span>
        </h1>

        {/* Date */}
        <div className="flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-5 h-5"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span className="text-text">15 NOV</span>
        </div>
      </div>
    </div>
  );
}
