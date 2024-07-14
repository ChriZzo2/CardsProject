import { useAppDispatch, useAppSelector } from '@/components/hooks'
import { Pagination } from '@/components/ui/pagination'
import { DeleteIcons } from '@/images/icons/Table/DeleteIcons'
import { EditIcons } from '@/images/icons/Table/EditIcons'
import { PlayCircleIcons } from '@/images/icons/Table/PlayCircleIcons'
import { setIsAuthenticated, setMe } from '@/services/auth/auth.slice'
import { useGetMeQuery } from '@/services/auth/authApi'
import { useGetDecksQuery } from '@/services/decks/decks-api'
import {
  setCurrentPage,
  setDeckId,
  setFind,
  setItems,
  setMaxSliderValue,
  setMinSliderValue,
  setOrderBy,
  setSort,
} from '@/services/features/tableComponentSlice/tableComponent.slice'

import s from './tableComponent.module.scss'

import { Button } from '../../../ui/button'
import {
  Table,
  TableBody,
  TableDataCell,
  TableHeadCell,
  TableHeader,
  TableRow,
} from '../../../ui/tables/tables'
import { Typography } from '../../../ui/typography'
import { SectionFilter } from '../sectionFilter/sectionFilter'
import SuperSort from './superSort/superSort'
import { CurrentData } from './data/data'
import defaultIcon from './../../../ui/addNewDeck/icon/Photo.jpg'
import { RemoveDeck } from '@/components/ui/removeDeck/removeDeck'

const defIcon = defaultIcon

export const TableComponent = () => {
  const decks = useAppSelector(state => state.tableComponentSlice)
  const authorId = useAppSelector(state => state.tableComponentSlice.authorId)

  const { data } = useGetDecksQuery({
    currentPage: decks.currentPage,
    itemsPerPage: Number(decks.items),
    maxCardsCount: decks.maxSliderValue,
    minCardsCount: decks.minSliderValue,
    name: decks.name,
    orderBy: decks.orderBy,
    authorId,
    favoritedBy: decks.favoritedBy,
  })

  const { data: me } = useGetMeQuery()

  const dispatch = useAppDispatch()

  if (me) {
    dispatch(setMe({ ...me }))
    dispatch(setIsAuthenticated(true))
  }
  const handleSliderValueChange = (value: number[]) => {
    dispatch(setMinSliderValue(value[0]))
    dispatch(setMaxSliderValue(value[1]))
  }
  const onInputValueChangeHandler = (value: string) => {
    dispatch(setFind(value))
  }
  const onHandleSort = (value: string) => {
    dispatch(setSort(value))
  }
  const handleSortHeadCell = (value: string) => {
    if (!decks.orderBy) {
      dispatch(setOrderBy(`${value}-asc`))
    }
    if (decks.orderBy) {
      const orderArray = decks.orderBy.split('-')

      if (orderArray[0] === value) {
        dispatch(setOrderBy(`${value}-desc`))
      }
      if (orderArray[0] !== value) {
        dispatch(setOrderBy(`${value}-asc`))
      }
      if (orderArray[1] === 'desc' && orderArray[0] === value) {
        dispatch(setOrderBy(null))
      }
    }
  }

  const sortArrow = (value: string) => {
    if (!decks.orderBy) {
      return <span>•</span>
    } else {
      const orderArray = decks.orderBy.split('-')

      if (!orderArray || orderArray[0] !== value) {
        return <span>•</span>
      }
      if (orderArray[1] === 'asc' && orderArray[0] === value) {
        return <span>↑</span>
      }
      if (orderArray[1] === 'desc' && orderArray[0] === value) {
        return <span>↓</span>
      }
    }
  }

  const handlePageChange = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber))
  }
  const setItem = (value: string) => {
    dispatch(setItems(+value))
  }

  const onHandelDeleted = (id: string) => {
    dispatch(setDeckId(id))
  }
  return (
    <Typography as={'div'} className={s.Wrapper}>
      <Typography as={'div'} className={s.FilterWrapper}>
        <SectionFilter
          authorId={decks.authorId}
          maxCardsCount={decks.maxSliderValue}
          minCardsCount={decks.minSliderValue}
          onInputValueChangeHandler={onInputValueChangeHandler}
          setSliderValue={handleSliderValueChange}
        />
      </Typography>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHeadCell onClick={() => handleSortHeadCell('name')}>
              {sortArrow('name')} Name
            </TableHeadCell>
            <TableHeadCell onClick={() => handleSortHeadCell('cardsCount')}>
              {sortArrow('cardsCount')} Card
            </TableHeadCell>
            <TableHeadCell onClick={() => handleSortHeadCell('updated')}>
              {sortArrow('updated')} Last Updated
            </TableHeadCell>
            <TableHeadCell onClick={() => handleSortHeadCell('created')}>
              {sortArrow('created')} Created By
            </TableHeadCell>
            <TableHeadCell></TableHeadCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.items.map(items => {
            return (
              <TableRow key={items.id}>
                <TableDataCell>
                  <a className={s.deckIconWrapper}>
                    {items.cover ? (
                      <img className={s.deckIcon} src={items.cover} />
                    ) : (
                      <img className={s.deckIcon} src={defIcon} />
                    )}
                  </a>
                  <SuperSort onChange={onHandleSort} sort={decks.sort} value={'name'}></SuperSort>
                  {items.name}
                </TableDataCell>
                <TableDataCell className={s.td1}>{items.cardsCount}</TableDataCell>
                <TableDataCell className={s.td2}>
                  <CurrentData currentUpData={items.updated} />
                </TableDataCell>
                <TableDataCell className={s.td3}>{items.author.name}</TableDataCell>
                <TableDataCell className={s.td4}>
                  <Typography as={'div'} className={s.icons}>
                    {items.author.id === me?.id && (
                      
                          <Button variant={'icon'} onClick={() => alert('9')}>
                            <EditIcons />
                          </Button>
                       
                    )}
                    
                        <Button variant={'icon'}>
                          <PlayCircleIcons />
                        </Button>
                      

                    {items.author.id === me?.id && (
                      <RemoveDeck id={items.id}
                        trigger={
                          <Button
                          id={items.id}
                            
                            disabled={!(items.author.id === me?.id)}
                            variant={'icon'}
                          >
                            <DeleteIcons />
                          </Button>
                        }
                      />
                    )}
                  </Typography>
                </TableDataCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>

      {data && (
        <Typography as={'div'} className={s.PaginationWrapper}>
          <Pagination
            currentPage={decks.currentPage}
            handlePageChange={handlePageChange}
            items={decks.items.toString()}
            itemsPerPage={data.pagination.itemsPerPage}
            setItems={setItem}
            totalItems={data.pagination.totalItems}
          />
        </Typography>
      )}
    </Typography>
  )
}
