import React from "react";
import { RadioControlMeta } from "./types";
import { Radio, RadioChangeEvent } from "antd";

export interface RadioControlProps {
    control: RadioControlMeta;
    onChange: (value: string) => void;
    value: string
}
export const RadioControl = (props: RadioControlProps) => {
    const onChange = (e: RadioChangeEvent) => {
        props.onChange && props.onChange(e.target.value)
    }
    return <Radio.Group style={{width: '100%'}} {...props.control} value={props.value} onChange={onChange} />
}
