import { TextField } from '@/components/ui/input'
import s from './sectionFilter.module.scss'
import { Button } from '@/components/ui/button'
import { SliderApp } from '@/components/ui/slider'
import clear from './icon/clear.svg'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'
import { useState } from 'react'

export const SectionFilter = () => {
  const [active, setActive] = useState (0)
  

const handleButtonClick = (index:number) => {
  setActive(index);
};
  return (
    <div className={s.root}>
      <div className={s.textFieldWrapper}>
        <TextField onReset={() => {}} value={'a'}/>
      </div>
      <div className={s.cardsButtonWrapper}>
        <Typography as={"p"} variant='body2' className={s.titleButtons}>Show packs cards</Typography>
        <Typography as={"div"} variant='body1' className={s.buttonWrapper}>
          <Button className={clsx(s.Button,s.LButton, active === 0 && s.active)} onClick={() => handleButtonClick(0)}>My cards</Button>
          <Button className={clsx(s.Button,s.RButton, active === 1 && s.active)} onClick={() => handleButtonClick(1)}>All cards</Button>
        </Typography>
      </div>
      <div>
        <SliderApp value={[1,99]}></SliderApp>
      </div>
      <div>
        <Button className={s.clearButton}>
          <img className={s.svgClearIcon} src={clear}></img>Clear Filter
        </Button>
      </div>
    </div>
  )
}
