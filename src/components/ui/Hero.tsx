interface HeroProps {
  readonly title: string
  readonly tagline: string
}

export function Hero({ title, tagline }: HeroProps) {
  return (
    <section className="text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
      <p className="mt-3 text-slate-400">{tagline}</p>
    </section>
  )
}
