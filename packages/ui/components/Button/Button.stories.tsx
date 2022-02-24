import { Story, Meta, ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'
import { ButtonProps } from './Button.types'
import { ButtonMock } from './Button.mock'

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button
} as ComponentMeta<typeof Button>;


const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  /*
  * Args from ButtonProps can be filled out here for
  * a Dynamic Story Board
  */
  ...ButtonMock
};
