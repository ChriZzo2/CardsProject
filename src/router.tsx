import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { useAppDispatch } from '@/components/hooks'
import { ErrorPage } from '@/pages/error-page/error-page'
import { SingUpPage } from '@/pages/sign-up-page/signUp-page'
import { setIsAuthenticated } from '@/services/auth/auth.slice'

import { Section } from './components/layout/section/section'
import { SingInPage } from './pages/sing-in-page/singIn-page'
import { useGetMeQuery } from './services/auth/authApi'

const publicRoutes: RouteObject[] = [
  {
    element: <SingUpPage />,
    path: '/sing-up',
  },
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
  {
    element: <Section />,
    path: '/decks',
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
  const { data: me, isError, isLoading } = useGetMeQuery()
  const isAuthenticated = me
  const dispatch = useAppDispatch()

  if (!me) {
    dispatch(setIsAuthenticated(false))
  }

  if (isLoading) {
    return <div>Loading/...</div>
  }

  if (isError) {
    return <Navigate to={'/login'} />
  }

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}
