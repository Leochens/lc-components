import React from "react";
import { SliderControlMeta } from "./types";
import { Slider } from "antd";

export interface SliderControlProps {
    control: SliderControlMeta;
    onChange: (value: number) => void;
    value: number
}
export const SliderControl = (props: SliderControlProps) => {
    const onChange = (e: number) => {
        props.onChange && props.onChange(e)
    }
    return <Slider {...props.control} style={{
        ...props.control.style,
        minWidth: 200
    }} value={props.value} onChange={onChange} />
}
