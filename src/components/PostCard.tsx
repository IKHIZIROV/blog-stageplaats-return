import type { Post } from '../types/post'

type PostCardProps = {
  post: Post
}

function PostCard({ post }: PostCardProps) {
  return (
    <article className="card-surface overflow-hidden">
      {post.images[0] ? (
        <img
          src={post.images[0]}
          alt={post.title}
          className="h-48 w-full object-cover"
          loading="lazy"
        />
      ) : null}
      <div className="p-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-cyan">{post.date}</p>
        <h3 className="mt-2 text-xl font-semibold text-brand-navy">{post.title}</h3>
        <p className="mt-3 text-slate-600">{post.excerpt}</p>
        {post.tags.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  )
}

export default PostCard
