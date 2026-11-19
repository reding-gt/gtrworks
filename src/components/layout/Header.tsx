import { NavLink } from 'react-router'
import type { NavItem } from '@/config/site'

interface HeaderProps {
  readonly name: string
  readonly navigation: readonly NavItem[]
}

export function Header({ name, navigation }: HeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
      <span className="font-semibold tracking-tight">{name}</span>
      <nav aria-label="Primary">
        <ul className="flex gap-4 text-sm">
          {navigation.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                end
                className={({ isActive }) =>
                  isActive ? 'text-sky-300' : 'text-slate-400 transition hover:text-slate-100'
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
