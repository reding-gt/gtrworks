import type { RouteObject } from 'react-router'
import { RootLayout } from '@/components/layout/RootLayout'
import { HomePage } from '@/features/home/HomePage'
import { NotFoundPage } from '@/features/not-found/NotFoundPage'

/**
 * Route table, kept free of router instantiation so it can be reused by the
 * browser router in production and a memory router in tests.
 */
export const routes: RouteObject[] = [
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      {
        path: 'about',
        lazy: async () => {
          const { AboutPage } = await import('@/features/about/AboutPage')
          return { Component: AboutPage }
        },
      },
      { path: '*', Component: NotFoundPage },
    ],
  },
]
