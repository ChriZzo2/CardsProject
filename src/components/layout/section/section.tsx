import { AddNewDeck } from "@/components/ui/addNewDeck/addNewDeck"
import { SectionFilter } from "./sectionFilter/sectionFilter"
import { SectionModal } from "./sectionModal/sectionModal"
import { SectionTable } from "./sectionTable/sectionTable"

export const Section = ()=>{
    return <>
    <AddNewDeck/>
    <SectionFilter/>
    <SectionTable/>
    </>
}