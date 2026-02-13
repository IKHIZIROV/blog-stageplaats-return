import { ViewTransitionNavLink } from './ViewTransitionLink'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Over', to: '/over' },
  { label: 'Blog', to: '/blog' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="container-page flex min-h-14 items-center justify-between gap-4 py-3 sm:min-h-16 sm:py-4">
        <ViewTransitionNavLink
          to="/"
          className="flex items-baseline gap-2 rounded-lg outline-none transition focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2"
        >
          <span className="text-xl font-bold tracking-tight text-brand-navy sm:text-2xl">RETURN</span>
          <span className="hidden text-sm font-medium text-slate-500 sm:block">Stageblog</span>
        </ViewTransitionNavLink>

        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Hoofdnavigatie">
          {links.map((link) => (
            <ViewTransitionNavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  'rounded-lg px-3 py-2 text-sm font-medium outline-none transition duration-200 focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 sm:px-4',
                  isActive
                    ? 'bg-brand-cyan text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-brand-navy active:bg-slate-200',
                ].join(' ')
              }
            >
              {link.label}
            </ViewTransitionNavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
