import React, { ChangeEvent } from "react";
import { TextControlMeta } from "./types";
import { Input } from "antd";

export interface TextControlProps {
    control: TextControlMeta;
    onChange: (value: string) => void;
    value: string
}
export const TextControl = (props: TextControlProps) => {
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange && props.onChange(e.target.value)
    }
    return <Input style={{width: '100%'}} {...props.control} value={props.value} onChange={onChange} />
}