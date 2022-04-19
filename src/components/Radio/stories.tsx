import { Story, Meta } from '@storybook/react/types-6-0'
import Radio, { RadioProps } from '.'

export default {
  title: 'Form/Radio',
  component: Radio,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: Story<RadioProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        name="category"
        label="Action"
        labelFor="action"
        id="action"
        value="action"
        defaultChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        name="category"
        label="Adventure"
        labelFor="adventure"
        id="adventure"
        value="adventure"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        name="category"
        label="Strategy"
        labelFor="strategy"
        id="strategy"
        value="strategy"
        {...args}
      />
    </div>
  </>
)
