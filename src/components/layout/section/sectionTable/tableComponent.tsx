import { PlayCircleIcons } from '@/images/icons/Table/PlayCircleIcons'
import { Button } from '../../../ui/button'
import {
  Table,
  TableBody,
  TableDataCell,
  TableHeadCell,
  TableHeader,
  TableRow,
} from '../../../ui/tables/tables'
import { EditIcons } from '@/images/icons/Table/EditIcons'
import { DeleteIcons } from '@/images/icons/Table/DeleteIcons'


import { Typography } from '../../../ui/typography'

import s from './tableComponent.module.scss'

import { useState } from 'react'
import { Pagination } from '@/components/ui/pagination'
import { SectionFilter } from '../sectionFilter/sectionFilter'
import SuperSort from './superSort/superSort'
import { useAppDispatch, useAppSelector } from '@/components/hooks'
import {
  setCurrentPage,
  setFind,
  setItems,
  setMaxSliderValue,
  setMinSliderValue,
  setOrderBy,
  setSort,
} from '@/services/features/tableComponentSlice/tableComponent.slice'
import { useGetDecksQuery } from '@/services/decks/decks-api'



export const TableComponent = () => {
  const decks = useAppSelector(state => state.tableComponent)
  
  
  const { data } = useGetDecksQuery({
    currentPage: decks.currentPage,
    itemsPerPage: Number(decks.items),
    minCardsCount: decks.minSliderValue,
    maxCardsCount: decks.maxSliderValue,
    name: decks.name,
    orderBy: decks.orderBy,
  })
  
  
  const dispatch = useAppDispatch()
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

  return (
    <Typography as="div" className={s.Wrapper}>
      <Typography as="div" className={s.FilterWrapper}>
        <SectionFilter
          maxCardsCount={decks.maxSliderValue}
          minCardsCount={decks.minSliderValue}
          setSliderValue={handleSliderValueChange}
          onInputValueChangeHandler={onInputValueChangeHandler}
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
                  <SuperSort onChange={onHandleSort} sort={decks.sort} value={'name'}></SuperSort>
                  {items.name}
                </TableDataCell>
                <TableDataCell>{items.cardsCount}</TableDataCell>
                <TableDataCell>{items.updated}</TableDataCell>
                <TableDataCell>{items.author.name}</TableDataCell>
                <TableDataCell>
                  <Typography as="div" style={{ display: 'flex', gap: '4px' }}>
                    <Button variant={'icon'}>
                      <PlayCircleIcons />
                    </Button>
                    <Button variant={'icon'}>
                      <EditIcons />
                    </Button>
                    <Button variant={'icon'}>
                      <DeleteIcons />
                    </Button>
                  </Typography>
                </TableDataCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>

      {data && (
        <Typography as="div" className={s.PaginationWrapper}>
          <Pagination
            currentPage={decks.currentPage}
            items={decks.items.toString()}
            handlePageChange={handlePageChange}
            setItems={setItem}
            totalItems={data.pagination.totalItems}
            itemsPerPage={data.pagination.itemsPerPage}
          />
        </Typography>
      )}
    </Typography>
  )
}