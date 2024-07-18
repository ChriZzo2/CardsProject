import React, { useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/components/hooks'
import { SectionModal } from '@/pages/modal-page/modal-page'
import { useUpdateDeckMutation } from '@/services/decks/decks-api'
import {
  setDeckName,
  setDeckPrivacy,
} from '@/services/features/tableComponentSlice/tableComponent.slice'
import * as Dialog from '@radix-ui/react-dialog'

import s from '../../components/ui/addNewDeck/addNewDeck.module.scss'


import Photo from '../../components/ui/addNewDeck/icon/Photo.jpg'
import iconCloseButton from '../../components/ui/addNewDeck/icon/iconCloseButton.svg'

import { Typography } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { WorkWithImage } from '@/components/ui/addNewDeck/component/workWithImage'


type Props = {
  trigger: React.ReactNode
}

export const EditDeck = ({ trigger }: Props) => {
  const deck = useAppSelector(state => state.tableComponentSlice)
  const [photo, setPhoto] = useState<File | null>(null)
  const dispatch = useAppDispatch()
  const [updateDeck] = useUpdateDeckMutation()

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhoto(e.target.files[0])
    }
  }
  const onHandelDeleteClick = () => {
    setPhoto(null)
  }

  const changeInputValue = (value: string) => {
    dispatch(setDeckName(value))
  }

  const changeInputChecked = (checked: boolean) => {
    dispatch(setDeckPrivacy(checked))
  }

  const handleSendDeck = async () => {
    await updateDeck({
      id: deck.deckId,
      params: { isPrivate: deck.deckPrivacy, name: deck.deckName },
    })
  }

  return (
    <SectionModal title={''} trigger={trigger}>
      <div className={s.container}>
        <div className={s.header}>
          <Typography as={'h3'} className={s.Title} variant={'h3'}>
            Edit Pack
          </Typography>
          <Dialog.Close asChild>
            <Button className={s.closeWindow}>
              <img src={iconCloseButton} />
            </Button>
          </Dialog.Close>
        </div>
        <div className={s.content}>
          {photo && (
            <div className={s.photoWrapper}>
              <img alt={'Uploaded'} className={s.photoContent} src={URL.createObjectURL(photo)} />
            </div>
          )}
          {photo === null && (
            <div className={s.photoWrapper}>
              <img alt={'noPhoto'} className={s.photoContent} src={Photo} />
            </div>
          )}
          <div>
            <TextField label={'Name Pack'} onChangeText={changeInputValue} value={deck.deckName} />
            {!photo ? (
              <WorkWithImage Title={'Upload image'} handlePhotoChange={handlePhotoChange} />
            ) : (
              <div className={s.divWrapper}>
                <Button className={s.delete} onClick={onHandelDeleteClick}>
                  Delete cover
                </Button>
                <WorkWithImage
                  Title={'Change image'}
                  className={s.withPhoto}
                  handlePhotoChange={handlePhotoChange}
                />
              </div>
            )}
          </div>
          <label className={s.checkboxWrapper} id={'checkbox'}>
            <Checkbox
              checked={deck.deckPrivacy}
              id={'checkbox'}
              label={'Private pack'}
              onCheckedChange={changeInputChecked}
            />
          </label>
          <div className={s.buttonWrapper}>
            <Dialog.Close asChild>
              <Button className={s.cancel}>Cancel</Button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Button onClick={handleSendDeck}>Send</Button>
            </Dialog.Close>
          </div>
        </div>
      </div>
    </SectionModal>
  )
}
