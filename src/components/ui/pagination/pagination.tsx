import { useMemo } from 'react'

import { v4 as uuidv4 } from 'uuid'

import s from './pagination.module.scss'
import { Typography } from '../typography'
import { Select } from '../select'

type Props = {
  items: string
  currentPage: number 
  setItems: (value: string) => void
  handlePageChange: (page: number) => void
  itemsPerPage: number 
  totalItems: number 
}

const itemsCelect = [5, 9, 13]

const generatePagination = (totalItems: number, itemsPerPage: number, currentPage: number) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  let pages = []

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }
  } else {
    for (let i = 1; i <= currentPage; i++) {
      pages.push(i)
    }
    if (currentPage > 3 && currentPage < totalPages - 3) {
      pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]
    } else if (currentPage <= 3) {
      pages = [1, 2, 3, 4, 5, '...', totalPages]
    } else {
      pages = [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
    }
  }

  return { pages, totalPages }
}

export const Pagination = ({ currentPage, handlePageChange, itemsPerPage, totalItems, items, setItems }: Props) => {
  const { pages, totalPages } = useMemo(() => {
    return generatePagination(totalItems, itemsPerPage, currentPage)
  }, [currentPage, itemsPerPage, totalItems])

  return (
    <Typography as='div' className={s.WrapperDiv}>
      <button
        className={s.navigationButton}
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        {'<'}
      </button>
      {pages.map(page =>
        typeof page === 'string' ? (
          <span className={s.ellipsis} key={uuidv4()}>
            {page}
          </span>
        ) : (
          typeof page === 'number' && (
            <button
              className={
                page === currentPage
                  ? `${s.paginationButton} ${s.activePageButton}`
                  : s.paginationButton
              }
              key={page}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          )
        )
      )}
      <button
        className={s.navigationButton}
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        {'>'}
      </button>
      <Typography as="div" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <Typography as="div" variant="body2">
          {' '}
          Show
        </Typography>
        <Select
          variant="small"
          items={itemsCelect}
          onValueChange={setItems}
          placeholder={String(items)}
        ></Select>
        <Typography as="div" variant="body2">
          {' '}
          on the page
        </Typography>
      </Typography>
    </Typography>
  )
}
