import React from "react";
import { CheckboxControlMeta } from "./types";
import { Checkbox } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";

export interface CheckboxControlProps {
    control: CheckboxControlMeta;
    onChange: (value: string) => void;
    value: string
}
export const CheckboxControl = (props: CheckboxControlProps) => {
    const onChange = (e: CheckboxChangeEvent) => {
        props.onChange && props.onChange(e.target.value)
    }
    return <Checkbox {...props.control} value={props.value} onChange={onChange} />
}
