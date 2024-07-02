import type {Meta, StoryObj} from '@storybook/react'
import { AddNewDeck } from './addNewDeck'


const meta = {
    argTypes: {
        
    },
    component: AddNewDeck,
    tags: [],
    title: 'Components/AddNewDeck'
} satisfies Meta<typeof AddNewDeck>

export default meta
type Story = StoryObj<typeof meta>

export const AddNewDeckStories: Story = {
    args: {
      
    },
  }
  
  
