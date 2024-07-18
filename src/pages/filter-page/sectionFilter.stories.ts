import type { Meta, StoryObj } from '@storybook/react'
import { SectionFilter } from './filter-page'

const meta = {
  component: SectionFilter,
  tags: [],
  title: 'Components/layout/SectionFilter',
} satisfies Meta<typeof SectionFilter>

export default meta
type Story = StoryObj<typeof meta>

export const SectionFilterStories: Story = {
  args: {},
}
