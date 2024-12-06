import type { Meta, StoryObj } from '@storybook/react';

import Index from './index';
import { ControlType } from './controls/types';
import { useState } from 'react';

const meta = {
  component: (props) => {
    const [trueData, setTrueData] = useState(props.data);
    const onChange = (code: string, value: any) => {
      setTrueData({
        ...trueData,
        [code]: value
      })
    }
    return <Index {...props} data={trueData} onChange={onChange} />
  },
} satisfies Meta<typeof Index>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: {
      name: 'zhl',
      gender: 'male',
      slider: 40
    },
    meta: [
      {
        name: '姓名',
        code: 'name',
        type: ControlType.Text,
        control: {
        }
      },
      {
        name: '滑动条',
        code: 'slider',
        type: ControlType.Slider,
        control: {
          max: 100,
          min: 0,
          width: '200px'
        }
      },
      {
        name: '性别',
        code: 'gender',
        type: ControlType.Select,
        control: {
          defaultValue: 'male',
          options: [
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
      },
      {
        name: '颜色',
        code: 'color',
        type: ControlType.Color,
        control: {
          defaultValue: '#f00'
        }
      },
      {
        name: '尺寸',
        code: 'size',
        type: ControlType.Radio,
        control: {
          block: true,
          optionType: "button",
          buttonStyle: "solid",
          options: [
            {
              label: '大',
              value: 'lg'
            },
            {
              label: '中',
              value: 'md'
            }, {
              label: '小',
              value: 'sm'
            }
          ]
        }
      },
      {
        name: '日期',
        code: 'date',
        type: ControlType.Date,
        control: {
        }
      },
      {
        name: '时间',
        code: 'time',
        type: ControlType.Time,
        control: {
        }
      },
      {
        name: '标签',
        code: 'tags',
        type: ControlType.Tag,
        control: {
          tags: [{ text: '你好' }, { text: '优秀' }]
        }
      },
      {
        name: '数字',
        code: 'number',
        type: ControlType.Number,
        control: {
        }
      },
      {
        name: '复选框',
        code: 'check',
        type: ControlType.Checkbox,
        control: {
        }
      },
    ],
    styles: {
      width: 500
    },
    onChange: () => { },
    options: {}
  }
};