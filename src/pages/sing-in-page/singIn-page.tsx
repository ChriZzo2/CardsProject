import { Navigate } from 'react-router-dom'

import { SignIn } from '@/components/auth/sing-in'
import { useGetMeQuery, useLoginMutation } from '@/services/auth/authApi'

import s from './singin-page.module.scss'

export const SingInPage = () => {
  const { data: me } = useGetMeQuery()
  const [login] = useLoginMutation()

  if (me) {
    return <Navigate to={'/decks'} />
  }

  const loginOn = (data: any) => {
    login(data)
  }

  return (
    <div className={s.singinWrapper}>
      <SignIn onSubmit={loginOn} />
    </div>
  )
}
