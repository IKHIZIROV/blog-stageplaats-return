import { flushSync } from 'react-dom'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import type { ComponentPropsWithoutRef } from 'react'

function useViewTransitionNavigate() {
  const navigate = useNavigate()
  const location = useLocation()

  return (to: string) => {
    if (to === location.pathname) return
    if (typeof document !== 'undefined' && 'startViewTransition' in document) {
      ;(document as Document & { startViewTransition: (cb: () => void) => void }).startViewTransition(() => {
        flushSync(() => navigate(to))
      })
    } else {
      navigate(to)
    }
  }
}

type ViewTransitionLinkProps = ComponentPropsWithoutRef<typeof Link>

function getPath(to: ViewTransitionLinkProps['to']): string {
  if (typeof to === 'string') return to
  return to?.pathname ?? ''
}

export function ViewTransitionLink({ to, onClick, ...props }: ViewTransitionLinkProps) {
  const path = getPath(to)
  const { pathname } = useLocation()
  const navigateWithTransition = useViewTransitionNavigate()

  return (
    <Link
      to={to}
      {...props}
      onClick={(e) => {
        if (path && path !== pathname) {
          e.preventDefault()
          navigateWithTransition(path)
        }
        onClick?.(e)
      }}
    />
  )
}

type ViewTransitionNavLinkProps = ComponentPropsWithoutRef<typeof NavLink>

function getNavPath(to: ViewTransitionNavLinkProps['to']): string {
  if (typeof to === 'string') return to
  return to?.pathname ?? ''
}

export function ViewTransitionNavLink({ to, onClick, ...props }: ViewTransitionNavLinkProps) {
  const path = getNavPath(to)
  const { pathname } = useLocation()
  const navigateWithTransition = useViewTransitionNavigate()

  return (
    <NavLink
      to={to}
      {...props}
      onClick={(e) => {
        if (path && path !== pathname) {
          e.preventDefault()
          navigateWithTransition(path)
        }
        onClick?.(e)
      }}
    />
  )
}
