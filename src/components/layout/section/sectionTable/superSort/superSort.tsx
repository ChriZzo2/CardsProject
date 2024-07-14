import up from './../icon/up.svg'
import down from './../icon/down.svg'
import React from 'react'
import { useCreateDecksMutation } from '@/services/decks/decks-api'

const upIcon = up
const downIcon = down
const noneIcon = ''

type SuperSortType ={
value: string;
sort: string;
 onChange: (newSort:string)=>void;
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === "") {
        return down
   } else if (sort === down) {
    return up 
   } else {
    return ""
   }
}

const SuperSort: React.FC<SuperSortType> = (
    
    {
        sort, value, onChange
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        debugger
        onChange(pureChange(sort, down, up))
    }
    // const [createDecks] = useCreateDecksMutation()
    // const icons = createDecks({cover})
    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={'-sort-' + value}
            onClick={onChangeCallback}
        >
            
            <img
                id={'-icon-' + sort}
                src={icon}
            />

            
        </span>
    )
}

export default SuperSort
