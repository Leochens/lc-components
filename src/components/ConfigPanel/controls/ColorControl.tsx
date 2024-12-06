import React from "react";
import { ColorControlMeta } from "./types";
import { ColorPicker } from "antd";
import { AggregationColor } from "antd/es/color-picker/color";

export interface ColorControlProps {
    control: ColorControlMeta;
    onChange: (value: AggregationColor) => void;
    value: string
}
export const ColorControl = (props: ColorControlProps) => {
    const onChange = (value: AggregationColor, css: string) => {
        props.onChange && props.onChange(value)
    }
    return <ColorPicker {...props.control} value={props.value} onChange={onChange} />
}
