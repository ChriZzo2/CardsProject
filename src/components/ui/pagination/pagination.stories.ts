import type { Meta, StoryObj } from '@storybook/react'

import { PaginationForStorybook } from '@/components/ui/pagination/paginationForStorybook'

const meta = {
  component: PaginationForStorybook,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof PaginationForStorybook>

export default meta
type Story = StoryObj<typeof meta>

export const PaginationDefault: Story = {
  args: {
    totalItems: 100,
    itemsPerPage: 5,
  },
}
