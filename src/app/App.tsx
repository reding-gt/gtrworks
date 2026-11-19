import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { toBasename } from './basename'
import { routes } from './routes'

const router = createBrowserRouter(routes, {
  basename: toBasename(import.meta.env.BASE_URL),
})

export function App() {
  return <RouterProvider router={router} />
}
