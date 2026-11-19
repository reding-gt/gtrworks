export interface NavItem {
  readonly label: string
  readonly to: string
}

export interface SiteConfig {
  readonly name: string
  readonly tagline: string
  readonly stack: readonly string[]
  readonly navigation: readonly NavItem[]
}

/** Static content for the site. Edit here; components stay presentational. */
export const site: SiteConfig = {
  name: 'gtrworks',
  tagline: 'Built with Vite, React and Tailwind. Deployed on every push.',
  stack: ['Vite', 'React', 'TypeScript', 'React Router', 'Tailwind CSS', 'GitHub Pages'],
  navigation: [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
  ],
}
