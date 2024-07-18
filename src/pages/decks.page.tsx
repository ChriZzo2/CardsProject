import { TableComponent } from '@/pages/table-page/tableComponent'
import { AddNewDeck } from '@/components/ui/addNewDeck/addNewDeck'
import { Page } from '@/components/ui/page/page'


export function DecksPage() {
  
  return (
    <Page>
      <AddNewDeck />
      <TableComponent />
    </Page>
  )
}
