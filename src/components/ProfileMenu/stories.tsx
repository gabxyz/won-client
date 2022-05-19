import { Story, Meta } from '@storybook/react/types-6-0'
import ProfileMenu from '.'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ width: 320, height: 300 }}>
    <ProfileMenu {...args} />
  </div>
)
