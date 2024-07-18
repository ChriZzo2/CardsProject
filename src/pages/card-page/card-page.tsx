import { Typography } from '@/components/ui/typography'
import { Link } from 'react-router-dom'
import s from './card-page.module.scss'
import { useCreateCardMutation } from '@/services/decks/decks-api'
import ArrowLeft from './icon/ArrowLeft.svg'
import { Table, TableBody, TableHeadCell, TableHeader, TableRow } from '@/components/ui/tables'

export const CardPage = () => {
  const [createCard, { isError }] = useCreateCardMutation({})

  return (
    <div>
      <Link to={'/'} className={s.link}>
        <img src={ArrowLeft} className={s.img}></img>
        <p className={s.text}>Back to Previouse Page</p>
      </Link>
      <div className={s.littleWrapper}>
        <Typography as={'div'}>Name</Typography>
        <Typography as={'div'}>Modal</Typography>
      </div>
      <Table>
        <TableHeader>
        <TableRow>
        <TableHeadCell>Question</TableHeadCell>
        <TableHeadCell>Answer</TableHeadCell>
        <TableHeadCell>Last Updated</TableHeadCell>
        <TableHeadCell>Grade</TableHeadCell>
        </TableRow>
        </TableHeader>
        <TableBody>
          
        </TableBody>
      </Table>
    </div>
  )
}
