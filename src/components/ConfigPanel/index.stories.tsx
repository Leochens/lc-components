import type { Meta, StoryObj } from '@storybook/react';

import Index from './index';
import { ControlType } from './controls/types';

const meta = {
  component: Index,
} satisfies Meta<typeof Index>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: {
      name: 'zhl',
      gender: 'male'
    },
    meta:[
      {
        name: '姓名',
        code: 'name',
        type: ControlType.Text,
        control: {
        }
      },
      {
        name: '性别',
        code: 'gender',
        type: ControlType.Select,
        control: {
          defaultValue: 'male',
          options:[
            {
            label: '男',
            value: 'male'
          },
          {
            label: '女',
            value: 'female'
          },
        ]
        }
      }
    ],
    styles: {
      width: 300
    },
    onChange: () => {},
    options: {}
  }
};