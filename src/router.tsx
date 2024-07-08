import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { ErrorPage } from '@/pages/error-page/error-page'
import { Section } from './components/layout/section/section'
import { SingInPage } from './pages/sing-in-page/singIn-page'
import { useGetMeQuery } from './services/auth/authApi'

const publicRoutes: RouteObject[] = [
  {
    element: <SingInPage />,
    path: '/login',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <Section />,
    path: '/',
  },
]

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
  {
    element: <ErrorPage />,
    path: '*',
  },
])

export function Router() {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const { data: me } = useGetMeQuery()
  const isAuthenticated = me && me?.isEmailVerified !== false

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
