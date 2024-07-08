import { Navigate } from 'react-router-dom'

import { SignUp } from '@/components/auth/sing-up'
import { useSignUpMutation } from '@/services/auth/authApi'

import s from '@/pages/sing-in-page/singin-page.module.scss'

export const SingUpPage = () => {
  const [singUp, { data, isLoading }] = useSignUpMutation()

  if (isLoading) {
    return <div>Loading</div>
  }
  const registerIt = (data: any) => {
    console.log(data)
    singUp(data)
  }

  if (data?.id) {
    return <Navigate to={'/login'} />
  }

  return (
    <div className={s.singinWrapper}>
      <SignUp onSubmit={registerIt} />
    </div>
  )
}
