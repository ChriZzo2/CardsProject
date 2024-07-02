import { Pagination } from '@/components/ui/pagination'
import { TableForStorybook } from '@/components/ui/tables/tableForStorybook'

const Items = [
  {
    by: 'by',
    counterCard: 2,
    id: 1,
    name: 'name',
    updated: 'updated',
  },
  {
    by: 'bydasd',
    counterCard: 1,
    id: 1,
    name: 'name',
    updated: 'updated',
  },
  {
    by: 'bdsady',
    counterCard: 1,
    id: 1,
    name: 'name',
    updated: 'updated',
  },
  {
    by: 'by',
    counterCard: 4,
    id: 1,
    name: 'name',
    updated: 'updated',
  },
  {
    by: 'by',
    counterCard: 3,
    id: 1,
    name: 'name',
    updated: 'updated',
  },
]

export const SectionTable = () => {
  return (
    <div>
      <TableForStorybook items={Items.map(el => el)} />
        <Pagination currentPage={1} handlePageChange={()=>{}} itemsPerPage={6} totalItems={4}/>
    </div>
  )
}
