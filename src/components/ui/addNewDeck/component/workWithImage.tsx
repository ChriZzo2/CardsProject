import { ComponentProps } from "react"
import { Typography } from "../../typography"
import icon from '../icon/icon.svg'
import s from './workWithImage.module.scss'
import clsx from "clsx"
type WorkWithImageType = {
  
    handlePhotoChange:(e: React.ChangeEvent<HTMLInputElement>)=>void
    Title:string
} & ComponentProps<'label'>

export const WorkWithImage=({handlePhotoChange, className,Title}:WorkWithImageType)=>{
    return <label htmlFor="fileInput" className={clsx(s.photoInputBase, className)}>
    <img src={icon} />
    <Typography as={'span'} variant={'subtitle2'} className={s.spanTitle}>
      {Title}
    </Typography>

    <input
      id="fileInput"
      className={s.modalInput}
      type="file"
    
      onChange={handlePhotoChange}
      placeholder=""
    />
  </label>
}