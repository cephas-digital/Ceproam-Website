// components/blog/BlogCard.tsx

import type { BlogPost } from "../../types/types";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article
      className="
        overflow-hidden
        rounded-2xl
        bg-white
        shadow-[0_4px_20px_rgba(0,0,0,0.04)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      <div className="h-[230px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6">
        <span className="text-[11px] font-bold uppercase tracking-wide text-[#FF6B00]">
          {post.category}
        </span>

        <h3 className="mt-3 text-2xl leading-tight font-bold text-[#00193C]">
          {post.title}
        </h3>

        <p className="mt-4 line-clamp-3 text-[15px] leading-7 text-slate-500">
          {post.excerpt}
        </p>
      </div>
    </article>
  );
}
