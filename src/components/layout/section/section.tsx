import { AddNewDeck } from "@/components/ui/addNewDeck/addNewDeck"

import { TableComponent } from "./sectionTable/tableComponent"
import { RemoveDeck } from "@/components/ui/removeDeck/removeDeck"




export const Section = ()=>{

    
    return <>
    <RemoveDeck/>
    <AddNewDeck/>
    <TableComponent/>
    </>
}