import { Outlet } from 'react-router'
import { site } from '@/config/site'
import { Header } from './Header'

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100">
      <Header name={site.name} navigation={site.navigation} />
      <main className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-12">
        <Outlet />
      </main>
    </div>
  )
}
