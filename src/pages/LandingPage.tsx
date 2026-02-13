import { ViewTransitionLink } from '../components/ViewTransitionLink'
import postsData from '../data/posts.json'
import type { Post } from '../types/post'

const posts = [...(postsData as Post[])].sort(
  (a, b) => new Date(b.id).getTime() - new Date(a.id).getTime(),
)

/** Dagnummer van een post (dag 1 = eerste stagedag). Posts op datum aflopend. */
function getDayNumber(postId: string): number {
  const index = posts.findIndex((p) => p.id === postId)
  return index === -1 ? 1 : posts.length - index
}

function LandingPage() {
  const latestPost = posts[0]
  const latestDayNumber = latestPost ? getDayNumber(latestPost.id) : 0

  return (
    <>
      <section className="container-page relative overflow-hidden py-12 sm:py-16 lg:py-20">
        <div className="absolute -right-24 top-12 hidden h-52 w-52 rounded-md bg-brand-dark md:block" />
        <div className="absolute -bottom-20 -right-10 hidden h-64 w-64 rounded-full bg-brand-cyan/90 md:block" />

        <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-cyan">Software Engineering Stage</p>
            <p className="mt-2 text-lg font-medium text-slate-600 sm:text-xl">Ismail Khizirov</p>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-brand-navy sm:text-4xl lg:text-5xl">
              Dagelijkse ervaringen uit mijn stage, helder en eerlijk gedeeld.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Deze website is mijn stageblog. Hier documenteer ik mijn dagelijkse werk, wat ik leer, en mijn
              evolutie als software engineering intern. Zo kunnen school, mentor en begeleider mijn traject makkelijk
              opvolgen.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ViewTransitionLink
                to="/blog"
                className="rounded-lg bg-brand-cyan px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                Bekijk blogposts
              </ViewTransitionLink>
              <ViewTransitionLink
                to="/over"
                className="rounded-lg border border-brand-dark px-5 py-3 text-center text-sm font-semibold text-brand-dark transition hover:bg-brand-dark hover:text-white"
              >
                Meer over mij
              </ViewTransitionLink>
            </div>
          </div>

          {latestPost ? (
            <article className="card-surface overflow-hidden">
              <div className="flex h-52 items-center justify-center border-b border-slate-200 bg-slate-50 sm:h-64">
                <span className="text-6xl font-bold tracking-tight text-brand-cyan sm:text-7xl md:text-8xl">
                  Dag {latestDayNumber}
                </span>
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-cyan">Nieuwste blogpost</p>
                <h2 className="mt-2 text-2xl font-semibold text-brand-navy">{latestPost.title}</h2>
                <p className="mt-1 text-sm text-slate-500">{latestPost.date}</p>
                <p className="mt-4 text-slate-600">{latestPost.excerpt}</p>
                <ViewTransitionLink
                  to="/blog"
                  className="mt-6 inline-block rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
                >
                  Lees verder
                </ViewTransitionLink>
              </div>
            </article>
          ) : null}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-12 sm:py-16">
        <div className="container-page">
          <h2 className="section-title">Stage bij Return</h2>
          <p className="section-subtitle">
            Return is het bedrijf waar ik stage loop. Hieronder een korte samenvatting gebaseerd op hun website.
          </p>

          <div className="mt-10 space-y-8">
            <div className="card-surface p-6 sm:p-8">
              <h3 className="text-lg font-semibold uppercase tracking-wide text-brand-cyan">Return – Business Applications Consultancy</h3>
              <p className="mt-4 leading-relaxed text-slate-700">
                Return is expert in bedrijfssystemen en biedt consultancy om <strong>Power Platform</strong>, <strong>Dynamics 365 CE</strong>, <strong>Business Central</strong> en <strong>Microsoft 365</strong>-implementaties te verbeteren. Ze helpen bedrijven hun processen te stroomlijnen, productiviteit te verhogen en concurrentievoordeel te versterken. <em>Optimaliseer uw bedrijfsprocessen met Return.</em>
              </p>
              <p className="mt-4 leading-relaxed text-slate-700">
                <strong>Services:</strong> Spot consulting (strategische probleemoplossing voor Dataverse, Dynamics 365, M365), Support &amp; Maintenance voor Microsoft-technologieën, en projectbased solutions voor implementaties, migraties en maatwerk. Daarnaast publiceert Return add-ons op de Microsoft AppSource-marktplaats.
              </p>
              <p className="mt-4 leading-relaxed text-slate-700">
                <strong>Oplossingen:</strong> CRM, Microsoft PowerApps, Dynamics 365, Digital Workplace, ERP (Business Central), Microsoft Power BI, AI (Copilot), Webshop, Academy. <em>Software oplossingen voor groot en klein</em> – Dynamics 365 voor grote spelers, PowerApps voor klein tot middelgrote organisaties.
              </p>
            </div>

            <div className="card-surface p-6 sm:p-8">
              <h3 className="text-lg font-semibold uppercase tracking-wide text-brand-cyan">Ons DNA &amp; contact</h3>
              <p className="mt-4 leading-relaxed text-slate-700">
                <strong>Efficiëntie:</strong> Return waardeert uw tijd en werkt gericht op resultaat en deadlines. Geen eindeloze discussies – ze begrijpen uw behoeften en leveren oplossingen die uw doelen ondersteunen.
              </p>
              <p className="mt-4 leading-relaxed text-slate-700">
                <strong>Toegankelijk:</strong> Het team is bereikbaar en klaar om te helpen. Communicatie en ondersteuning staan centraal. <em>We do IT right.</em>
              </p>
              <p className="mt-4 text-slate-700">
                Terbekehofdreef 24/4, 2610 Wilrijk, België ·{' '}
                <a href="mailto:info@return.be" className="font-medium text-brand-cyan hover:underline">info@return.be</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page pb-16 pt-10">
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

