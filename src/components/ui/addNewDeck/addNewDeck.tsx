import { useState } from 'react'

import { SectionModal } from '@/pages/modal-page/modal-page'
import { useCreateDecksMutation } from '@/services/decks/decks-api'
import * as Dialog from '@radix-ui/react-dialog'

import s from './addNewDeck.module.scss'

import { Button } from '../button'
import { Checkbox } from '../checkbox'
import { TextField } from '../input'
import { Typography } from '../typography'
import { WorkWithImage } from './component/workWithImage'
import Photo from './icon/Photo.jpg'
import iconCloseButton from './icon/iconCloseButton.svg'

export const AddNewDeck = () => {
  const [createDecks] = useCreateDecksMutation()
  const [value, setValue] = useState<string>('')
  const [isPrivate, setIsPrivate] = useState<any>(false)

  const [photo, setPhoto] = useState<File | null>(null)

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhoto(e.target.files[0])
    }
  }
  const onHandelDeleteClick = () => {
    setPhoto(null)
  }

  const handleSendDeck = async () => {
    await createDecks({ isPrivate, name: value, cover: photo || null })
    setValue('')
  }

  const addNewDecksButton = <Button variant={'primary'}>Add New Deсk</Button>

  return (
    <SectionModal title={'Decks list'} trigger={addNewDecksButton}>
      <div className={s.container}>
        <div className={s.header}>
          <Typography as={'h3'} className={s.Title} variant={'h3'}>
            Add New Deck
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
            <TextField label={'Name Pack'} onChangeText={setValue} value={value} />
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
            <Checkbox checked={isPrivate} id={'checkbox'} onCheckedChange={setIsPrivate} />
            <Typography as={'span'} id={'checkbox'} variant={'body2'}>
              Private pack
            </Typography>
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
