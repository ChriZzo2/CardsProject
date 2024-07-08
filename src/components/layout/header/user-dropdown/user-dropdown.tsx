import { DropDownItem } from '@/components/ui/dropDown/dropDownItem'
import { DropDownMenu } from '@/components/ui/dropDown/dropDownMenu'
import { DropDownSeparator } from '@/components/ui/dropDown/dropDownSeparator'
import { Typography } from '@/components/ui/typography'
import { ProfleSvg } from '@/images/icons/dropDown/ProfleSvg'
import { SingOutSvg } from '@/images/icons/dropDown/SingOutSvg'
import { useLogOutMutation } from '@/services/auth/authApi'

import s from '@/components/ui/dropDown/dropDownMenu.module.scss'

export type UserDropdownProps = {
  email: null | string
  name: string
  photo: string
}

export const UserDropdown = ({ email, name, photo }: UserDropdownProps) => {
  //const getInitials = (name: string): string => name[0].toUpperCase() // для чего тут .toUpperCase()?
  const [logOut] = useLogOutMutation()

  const getInitials = (name: string): string => name[0]

  const imageDisplay = photo ? (
    <img alt={'avatar'} className={s.imageIconName} src={photo} />
  ) : (
    <p className={s.imageIconName}>{getInitials(name)}</p>
  )

  const logOutButtonHandler = async () => {
    await logOut()
  }

  const profileImage = (
    <div className={s.profileContainer}>
      <Typography className={s.profileText} variant={'subtitle1'}>
        {name}
      </Typography>
      {imageDisplay}
    </div>
  )

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <DropDownMenu trigger={profileImage}>
        <DropDownItem className={s.dropdownItemHeader}>
          {imageDisplay}
          <div>
            <Typography style={{ fontSize: '14px' }} variant={'subtitle2'}>
              {email}
            </Typography>
            <Typography style={{ fontSize: '12px' }} variant={'caption'}>
              {name}
            </Typography>
          </div>
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem asChild>
          <a href={'https://google.com'} style={{ textDecoration: 'none' }}>
            <ProfleSvg />
            <Typography variant={'caption'}>Profile</Typography>
          </a>
        </DropDownItem>
        <DropDownSeparator />
        <DropDownItem>
          <SingOutSvg />
          <Typography onClick={logOutButtonHandler} variant={'caption'}>
            Sign out
          </Typography>
        </DropDownItem>
      </DropDownMenu>
    </div>
  )
}
