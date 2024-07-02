import * as Dialog from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import './styles.css'
import s from './sectionModal.module.scss'
import { Typography } from '@/components/ui/typography'
import { ComponentProps } from 'react'
import { Button } from '@/components/ui/button'

type Props = {
  trigger?: React.ReactNode
} & ComponentProps<typeof Dialog.Root>

export const SectionModal = ({ children, trigger }: Props) => (
  <div className={s.SectionWrapper}>
    <Typography as={'h1'} variant="h1">
      Decks list
    </Typography>

    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button variant="primary">Add New Deсk</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">{children}</Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </div>
)
