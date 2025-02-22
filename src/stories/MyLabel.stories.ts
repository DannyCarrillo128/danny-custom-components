import { Meta, StoryObj } from "@storybook/react";

import { MyLabel, type Props } from "../components/MyLabel";

const meta: Meta<Props> = {
  title: 'My Label',
  component: MyLabel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: { control: 'inline-radio' },
    fontColor: { control: 'color' }
  }
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Basic label'
  }
};

export const AllCaps: Story = {
  args: {
    label: 'All caps label'
  }
};

export const Secondary: Story = {
  args: {
    label: 'Secondary label'
  }
};

export const CustomColor: Story = {
  args: {
    label: 'Custom color label'
  }
};
