import React from "react";
import { NumberControlMeta } from "./types";
import { InputNumber } from "antd";

export interface NumberControlProps {
    control: NumberControlMeta;
    onChange: (value: number | null | string) => void;
    value: number
}
export const NumberControl = (props: NumberControlProps) => {
    const onChange = (e: number | null | string) => {
        props.onChange && props.onChange(e)
    }
    return <InputNumber {...props.control} value={props.value} onChange={onChange} />
}
