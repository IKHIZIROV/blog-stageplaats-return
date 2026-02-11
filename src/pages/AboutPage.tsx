import PageHeader from '../components/PageHeader'

function AboutPage() {
  return (
    <>
      <PageHeader
        title="Over mij"
        subtitle="Mini-cv, stagecontext en links naar mijn professionele profielen."
      />

      <section className="container-page pb-16 pt-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <aside className="card-surface p-6">
            <img
              src="/images/profile-placeholder.svg"
              alt="Profielfoto"
              className="h-72 w-full rounded-xl object-cover"
            />
            <h2 className="mt-5 text-2xl font-semibold text-brand-navy">Jouw Naam</h2>
            <p className="mt-2 text-slate-600">Software Engineering Student</p>
            <div className="mt-6 space-y-2 text-sm text-slate-600">
              <p>
                LinkedIn:{' '}
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-brand-cyan hover:underline"
                >
                  linkedin.com/in/jouw-profiel
                </a>
              </p>
              <p>
                GitHub:{' '}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-brand-cyan hover:underline"
                >
                  github.com/jouw-gebruikersnaam
                </a>
              </p>
            </div>
          </aside>

          <div className="space-y-6">
            <article className="card-surface p-6">
              <h3 className="text-xl font-semibold text-brand-navy">Mini-cv</h3>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li><span className="font-semibold text-slate-700">Opleiding:</span> Bachelor Toegepaste Informatica</li>
                <li><span className="font-semibold text-slate-700">Richting:</span> Software Engineering</li>
                <li><span className="font-semibold text-slate-700">Skills:</span> TypeScript, React, Node.js, SQL, Git</li>
                <li><span className="font-semibold text-slate-700">Tools:</span> VS Code, Postman, Jira, Figma</li>
              </ul>
            </article>

            <article className="card-surface p-6">
              <h3 className="text-xl font-semibold text-brand-navy">Stage-informatie</h3>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li><span className="font-semibold text-slate-700">Bedrijf:</span> Return (aanpasbaar)</li>
                <li><span className="font-semibold text-slate-700">Locatie:</span> Stad, land (aanpasbaar)</li>
                <li><span className="font-semibold text-slate-700">Rol:</span> Software Engineering Intern</li>
                <li>
                  <span className="font-semibold text-slate-700">Taken:</span> Frontend development, bugfixing,
                  API-koppelingen, code reviews en documentatie.
                </li>
              </ul>
            </article>

            <article className="card-surface p-6">
              <h3 className="text-xl font-semibold text-brand-navy">Doel van deze blog</h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                Deze website geeft een transparant overzicht van mijn dagelijkse stageactiviteiten. Ze helpt mijn school,
                mentor en stagebegeleider om mijn groei, inzet en leerproces op te volgen.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
