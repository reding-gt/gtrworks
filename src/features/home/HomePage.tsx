import { Hero } from '@/components/ui/Hero'
import { TagList } from '@/components/ui/TagList'
import { site } from '@/config/site'
import { Counter } from './Counter'

export function HomePage() {
  return (
    <>
      <Hero title={site.name} tagline={site.tagline} />
      <TagList items={site.stack} />
      <Counter />
    </>
  )
}
