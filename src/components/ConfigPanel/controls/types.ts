import { CheckboxProps, ColorPickerProps, DatePickerProps, InputNumberProps, InputProps, RadioProps, SelectProps, SwitchProps, TagProps, TimePickerProps } from "antd";
import { SliderBaseProps, SliderSingleProps } from "antd/es/slider";
import { ConfigPanelMeta } from "../types";
import { CSSProperties } from "react";

export interface ControlMeta {
    hideLabel: boolean;
    readonly: boolean;
}
export interface GroupControlMeta extends ControlMeta {
}
export interface TabsControlMeta extends ControlMeta {
    defaultTab: string;
    tabs: Array<{
        name: string;
        code: string;
        children: Array<ConfigPanelMeta>
    }>
}
export interface CustomControlMeta extends ControlMeta {
}
export interface TextControlMeta extends ControlMeta, InputProps {
}
export interface ImageControlMeta extends ControlMeta {
    /**
     * 图片的的url
     */
    src: string;
    /**
     * 是否可以编辑图片
     */
    edit?: boolean; 
    /**
     * 上传配置 为空的话 默认本地图片
     */
    upload?: {
        /**
         *  图床上传地址
         */
        url: string;
        /**
         * 上传方法
         */
        method: 'GET' | 'POST';
        /**
         * 上传参数
         */
        params: any;
        /**
         * 编辑图片后 是否进行二次上传
         */
        editUpload: boolean;
    };
    /**
     * 图片在面板中的展示样式
     */
    style?: CSSProperties
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
    Image = 'Image',
    Custom = 'Custom',
    Group = 'Group',
    Tabs = 'Tabs',
    Tab = 'Tab',
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
    T extends ControlType.Image ? ImageControlMeta:
    T extends ControlType.Slider ? SliderControlMeta:
    T extends ControlType.Group ? GroupControlMeta:
    T extends ControlType.Tabs ? TabsControlMeta:
    T extends ControlType.Custom ? CustomControlMeta : any