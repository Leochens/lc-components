import { CheckboxProps, ColorPickerProps, DatePickerProps, InputNumberProps, InputProps, RadioProps, SelectProps, SwitchProps, TagProps, TimePickerProps } from "antd";
import { SliderBaseProps, SliderSingleProps } from "antd/es/slider";

export interface ControlMeta {
}
export interface CustomControlMeta extends ControlMeta {
}
export interface TextControlMeta extends ControlMeta, InputProps {
}
export interface SliderControlMeta extends ControlMeta, SliderSingleProps {
}
export interface BoolControlMeta extends ControlMeta, SwitchProps {
}
export interface SelectControlMeta extends ControlMeta, SelectProps {
}
export interface RadioControlMeta extends ControlMeta, RadioProps {
}
export interface CheckboxControlMeta extends ControlMeta, CheckboxProps {
}
export interface ColorControlMeta extends ControlMeta, ColorPickerProps {
}
export interface DateControlMeta extends ControlMeta, DatePickerProps {
}
export interface NumberControlMeta extends ControlMeta, InputNumberProps {
}
export interface TagControlMeta extends ControlMeta {
    tags: Array<TagProps & {
        text: string
    }>;
}
export interface TimeControlMeta extends ControlMeta, TimePickerProps {
}
export enum ControlType {
    Text = 'Text',
    Bool = 'Bool',
    Select = 'Select',
    Radio = 'Radio',
    Checkbox = 'Checkbox',
    Color = 'Color',
    Date = 'Date',
    Number = 'Number',
    Tag = 'Tag',
    Time = 'Time',
    Slider = 'Slider',
    Custom = 'Custom'
}

export type ControlMetaByType<T extends ControlType> =
    T extends ControlType.Text ? TextControlMeta:
    T extends ControlType.Bool ? BoolControlMeta:
    T extends ControlType.Select ? SelectControlMeta:
    T extends ControlType.Radio ? RadioControlMeta:
    T extends ControlType.Checkbox ? CheckboxControlMeta:
    T extends ControlType.Color ? ColorControlMeta:
    T extends ControlType.Date ? DateControlMeta:
    T extends ControlType.Number ? NumberControlMeta:
    T extends ControlType.Tag ? TagControlMeta:
    T extends ControlType.Time ? TimeControlMeta:
    T extends ControlType.Slider ? SliderControlMeta:
    T extends ControlType.Custom ? CustomControlMeta : any