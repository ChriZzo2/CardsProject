import type {Meta, StoryObj} from '@storybook/react'
import { SectionTable } from './sectionTable'



const meta = {
    argTypes: {
        
    },
    component: SectionTable,
    tags: [],
    title: 'Components/AddNewDeck'
} satisfies Meta<typeof SectionTable>

export default meta
type Story = StoryObj<typeof meta>

export const SectionTableStories: Story = {
    args: {
      
    },
  }