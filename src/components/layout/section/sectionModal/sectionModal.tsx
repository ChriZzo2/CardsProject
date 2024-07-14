import * as Dialog from '@radix-ui/react-dialog'

import './styles.css'
import s from './sectionModal.module.scss'
import { Typography } from '@/components/ui/typography'
import { ComponentProps } from 'react'

type Props = {
  trigger?: React.ReactNode
  title: string
} & ComponentProps<typeof Dialog.Root>

export const SectionModal = ({ children, trigger, title }: Props) => (
  <div className={s.SectionWrapper}>
    

    
    <Typography as={'h1'} variant="h1">
      {title}
    </Typography>
    
    <Dialog.Root>
     
      <Dialog.Trigger asChild>
        {trigger}
      </Dialog.Trigger>
      
      
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">{children}</Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
    
  </div>
)
