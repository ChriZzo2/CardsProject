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


import { SingInPage } from './pages/sing-in-page/singIn-page'
import { useGetMeQuery } from './services/auth/authApi'
import { DecksPage } from './pages/decks.page'
import { CardPage } from './pages/card-page/card-page'

const publicRoutes: RouteObject[] = [
  {
    element: <SingUpPage />,
    path: '/sing-up',
  },
  {
    element: <SingInPage />,
    path: '/login',
  },
  {
    element: <CardPage/>,
    path: '/card-page',
  }
]

const privateRoutes: RouteObject[] = [
  {
    element: <DecksPage />,
    path: '/',
  },
  {
    element: <DecksPage />,
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
