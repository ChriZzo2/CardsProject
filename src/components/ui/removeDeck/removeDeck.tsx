import React from 'react'

import { useAppSelector } from '@/components/hooks'
import { SectionModal } from '@/components/layout/section/sectionModal/sectionModal'
import { useDeletedDecksMutation } from '@/services/decks/decks-api'
import * as Dialog from '@radix-ui/react-dialog'

import s from './removeDeck.module.scss'

import { Button } from '../button'
import { Typography } from '../typography'
import iconCloseButton from './../addNewDeck/icon/iconCloseButton.svg'

interface RemoveDeckProps {
  trigger: React.ReactNode
}

export const RemoveDeck = ({ trigger }: RemoveDeckProps) => {
  const deckId = useAppSelector(state => state.tableComponentSlice.deckId)
  const [deletedDecks, { isLoading }] = useDeletedDecksMutation()
  const onHandelDeleted = async () => {
    await deletedDecks({ id: deckId })
  }

  return (
    <SectionModal title={''} trigger={trigger}>
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
          <Dialog.Close asChild>
            <Button onClick={onHandelDeleted}>Delete Deck</Button>
          </Dialog.Close>
        </div>
        {isLoading && (
          <div style={{ color: 'aqua', position: 'fixed', right: '50%', top: '50%' }}>
            Loading...
          </div>
        )}
      </div>
    </SectionModal>
  )
}
