import { Link } from 'react-router'
import { Hero } from '@/components/ui/Hero'

export function NotFoundPage() {
  return (
    <>
      <Hero title="404" tagline="That page does not exist." />
      <Link to="/" className="text-sky-300 underline-offset-4 hover:underline">
        Back to home
      </Link>
    </>
  )
}
