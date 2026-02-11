import { Link } from 'react-router-dom'
import postsData from '../data/posts.json'
import type { Post } from '../types/post'

const posts = [...(postsData as Post[])].sort(
  (a, b) => new Date(b.id).getTime() - new Date(a.id).getTime(),
)

function LandingPage() {
  const latestPost = posts[0]

  return (
    <>
      <section className="container-page relative overflow-hidden py-16 sm:py-20">
        <div className="absolute -right-24 top-12 hidden h-52 w-52 rounded-md bg-brand-dark md:block" />
        <div className="absolute -bottom-20 -right-10 hidden h-64 w-64 rounded-full bg-brand-cyan/90 md:block" />

        <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-cyan">Software Engineering Stage</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-brand-navy sm:text-5xl">
              Dagelijkse ervaringen uit mijn stage, helder en eerlijk gedeeld.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              Deze website is mijn stageblog. Hier documenteer ik mijn dagelijkse werk, wat ik leer, en mijn
              evolutie als software engineering intern. Zo kunnen school, mentor en begeleider mijn traject makkelijk
              opvolgen.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/blog"
                className="rounded-lg bg-brand-cyan px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                Bekijk blogposts
              </Link>
              <Link
                to="/over"
                className="rounded-lg border border-brand-dark px-5 py-3 text-sm font-semibold text-brand-dark transition hover:bg-brand-dark hover:text-white"
              >
                Meer over mij
              </Link>
            </div>
          </div>

          {latestPost ? (
            <article className="card-surface overflow-hidden">
              {latestPost.images[0] ? (
                <img src={latestPost.images[0]} alt={latestPost.title} className="h-56 w-full object-cover" />
              ) : null}
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-cyan">Nieuwste blogpost</p>
                <h2 className="mt-2 text-2xl font-semibold text-brand-navy">{latestPost.title}</h2>
                <p className="mt-1 text-sm text-slate-500">{latestPost.date}</p>
                <p className="mt-4 text-slate-600">{latestPost.excerpt}</p>
                <Link
                  to="/blog"
                  className="mt-6 inline-block rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
                >
                  Lees verder
                </Link>
              </div>
            </article>
          ) : null}
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Wat ik doe',
              text: 'Dagelijks deel ik concrete taken: featurewerk, bugfixes, meetings en technische beslissingen.',
            },
            {
              title: 'Wat ik leer',
              text: 'Per post beschrijf ik tools, frameworks en inzichten die ik tijdens mijn stage opdoe.',
            },
            {
              title: 'Waarom deze blog',
              text: 'Deze blog dient als bewijs en reflectie voor school, met een duidelijk overzicht van mijn stagegroei.',
            },
          ].map((item) => (
            <article key={item.title} className="card-surface p-6">
              <h3 className="text-xl font-semibold text-brand-navy">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default LandingPage
