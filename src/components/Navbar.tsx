import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Over', to: '/over' },
  { label: 'Blog', to: '/blog' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <span className="text-3xl font-bold tracking-tight text-brand-navy">RETURN</span>
          <span className="hidden text-sm text-slate-500 sm:block">Stageblog</span>
        </NavLink>

        <nav className="flex items-center gap-2 sm:gap-3">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  'rounded-lg px-3 py-2 text-sm font-medium transition',
                  isActive
                    ? 'bg-brand-cyan text-white'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-brand-navy',
                ].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
