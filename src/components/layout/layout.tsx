import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { useAppSelector } from '@/components/hooks'
import { Header } from '@/components/layout/header'
import { Container } from '@/components/ui/container/container'

import s from './laylout.module.scss'

type Props = ComponentPropsWithoutRef<'div'>
export const Layout = forwardRef<ElementRef<'div'>, Props>(({ children, ...restProps }, ref) => {
  const {
    isAuthenticated,
    me: { avatar, email, name },
  } = useAppSelector(state => state.auth)

  console.log(isAuthenticated)

  return (
    <div ref={ref} {...restProps}>
      <Header email={email} isAuthenticated={isAuthenticated} name={name} photo={avatar} />
      <main className={s.Main}>
        <Container>{children}</Container>
      </main>
      <div></div>
    </div>
  )
})
