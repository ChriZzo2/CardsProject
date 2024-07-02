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

const photoSchema = z.object({
  name: z.string().min(1, 'Пожалуйста, введите имя файла'),
  photo: z.any().optional(),
})

type PhotoFormValues = z.infer<typeof photoSchema>
export const AddNewDeck = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PhotoFormValues>({
    resolver: zodResolver(photoSchema),
  })

  const [photo, setPhoto] = useState<File | null>(null)

  const onSubmit = (data: PhotoFormValues) => {
    console.log('Сохраненные данные:', data)
  }

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhoto(e.target.files[0])
    }
  }
  const onHandelDeleteClick = () => {
    setPhoto(null)
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput
              control={control}
              name="name"
              label="Name Pack"
              error={errors.name?.message}
            />
            {!photo ? (
              <WorkWithImage
                handlePhotoChange={handlePhotoChange}
                register={register}
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
                  register={register}
                  Title={'Change image'}
                />
              </div>
            )}
          </form>
          <label id="checkbox" className={s.checkboxWrapper}>
            <Checkbox id="checkbox" />
            <Typography id="checkbox" as={'span'} variant={'body2'}>
              Private pack
            </Typography>
          </label>
          <div className={s.buttonWrapper}>
            <Dialog.Close asChild>
              <Button className={s.cancel}>Cancel</Button>
            </Dialog.Close>
            <Button>Send</Button>
          </div>
        </div>
      </div>
    </SectionModal>
  )
}
