import { SectionModal } from '@/components/layout/section/sectionModal/sectionModal'

import * as Dialog from '@radix-ui/react-dialog'

import s from './removeDeck.module.scss'

import { Button } from '../button'

import { Typography } from '../typography'

import iconCloseButton from './../addNewDeck/icon/iconCloseButton.svg'
import React from 'react'

interface RemoveDeckProps {
    trigger: React.ReactNode;
    onDelete?: () => void;
    
  }

export const RemoveDeck = ({trigger}: RemoveDeckProps) => {
  return (
    <SectionModal title='' trigger={trigger}>
      <div className={s.container}>
        <div className={s.header}>
          <Typography as={'h3'} className={s.Title} variant={'h3'}>
            Delete Deck
          </Typography>
          <Dialog.Close asChild>
            <Button className={s.closeWindow}>
              <img src={iconCloseButton} />
            </Button>
          </Dialog.Close>
          </div>
          <div className={s.mediumDiv}>
            <div>Do you really want to remove ccc?</div>
            <div>All cards will be deleted.</div>
          </div>
          <div className={s.buttonWrapper}>
            <Dialog.Close asChild>
              <Button className={s.cancel}>Cancel</Button>
            </Dialog.Close>
            <Button>Delete Deck</Button>
          </div>
        
      </div>
    </SectionModal>
  )
}
