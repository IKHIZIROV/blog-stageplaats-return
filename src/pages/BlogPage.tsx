import PageHeader from '../components/PageHeader'
import PostCard from '../components/PostCard'
import postsData from '../data/posts.json'
import type { Post } from '../types/post'

const posts = [...(postsData as Post[])].sort(
  (a, b) => new Date(b.id).getTime() - new Date(a.id).getTime(),
)

function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog"
        subtitle="Alle stageposts op een plek. Voeg nieuwe items toe in src/data/posts.json en ze verschijnen hier automatisch."
      />

      <section className="container-page pb-16 pt-10">
        {posts.length === 0 ? (
          <div className="card-surface p-8 text-center">
            <h2 className="text-xl font-semibold text-brand-navy">Nog geen posts</h2>
            <p className="mt-2 text-slate-600">Voeg een item toe aan src/data/posts.json om je eerste blogpost te tonen.</p>
          </div>
        ) : (
          <div className="space-y-10">
            <div className="grid gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>

            <div className="space-y-6">
              {posts.map((post) => (
                <article key={`${post.id}-full`} className="card-surface overflow-hidden">
                  {post.images.length > 0 ? (
                    <div className="grid gap-3 border-b border-slate-200 bg-slate-50 p-4 sm:grid-cols-2">
                      {post.images.map((image, index) => (
                        <img
                          key={`${post.id}-${image}`}
                          src={image}
                          alt={`${post.title} afbeelding ${index + 1}`}
                          className="h-48 w-full rounded-lg object-cover"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  ) : null}

                  <div className="p-6">
                    <p className="text-sm font-semibold uppercase tracking-wide text-brand-cyan">{post.date}</p>
                    <h2 className="mt-2 text-2xl font-semibold text-brand-navy">{post.title}</h2>

                    <div className="mt-4 space-y-4 leading-relaxed text-slate-700">
                      {post.content.map((paragraph) => (
                        <p key={`${post.id}-${paragraph.slice(0, 20)}`}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default BlogPage
