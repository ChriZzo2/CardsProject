import s from './addNewDeck.module.scss'
import { Typography } from '../typography'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useState } from 'react'
import { FormInput } from '../form/form-textField'

import iconCloseButton from './icon/iconCloseButton.svg'
import { Checkbox } from '../checkbox'
import { Button } from '../button'
import { WorkWithImage } from './component/workWithImage'
import Photo from './icon/Photo.jpg'
import { SectionModal } from '@/components/layout/section/sectionModal/sectionModal'
import * as Dialog from '@radix-ui/react-dialog'

import { TextField } from '../input'
import { useCreateDecksMutation } from '@/services/decks/decks-api'


export const AddNewDeck = () => {
  const [createDecks ] = useCreateDecksMutation()
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

  const handleSendDeck =  async () => {
     await createDecks({isPrivate, name: value})
     setValue('')
    
  }

  return (
    <SectionModal>
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
              <img className={s.photoContent} src={URL.createObjectURL(photo)} alt="Uploaded" />
            </div>
          )}
          {photo === null && (
            <div className={s.photoWrapper}>
              <img className={s.photoContent} src={Photo} alt="noPhoto" />
            </div>
          )}
          <div>
            <TextField
              
            
              value={value}
              onChangeText={setValue}
              label="Name Pack"
              
            />
            {!photo ? (
              <WorkWithImage
                handlePhotoChange={handlePhotoChange}
              
                Title={'Upload image'}
              />
            ) : (
              <div className={s.divWrapper}>
                <Button className={s.delete} onClick={onHandelDeleteClick}>
                  Delete cover
                </Button>
                <WorkWithImage
                  className={s.withPhoto}
                  handlePhotoChange={handlePhotoChange}
              
                  Title={'Change image'}
                />
              </div>
            )}
          </div>
          <label id="checkbox" className={s.checkboxWrapper}>
            <Checkbox id="checkbox" checked={isPrivate} onCheckedChange={setIsPrivate}/>
            <Typography id="checkbox" as={'span'} variant={'body2'}>
              Private pack
            </Typography>
          </label>
          <div className={s.buttonWrapper}>
            <Dialog.Close asChild>
              <Button className={s.cancel}>Cancel</Button>
            </Dialog.Close>
            <Button onClick={handleSendDeck}>Send</Button>
          </div>
        </div>
      </div>
    </SectionModal>
  )
}
