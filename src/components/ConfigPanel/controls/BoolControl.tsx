import React from "react";
import { BoolControlMeta } from "./types";
import { Switch } from "antd";

export interface BoolControlProps {
    control: BoolControlMeta;
    onChange: (value: boolean) => void;
    value: boolean
}
export const BoolControl = (props: BoolControlProps) => {
    const onChange = (e: boolean) => {
        props.onChange && props.onChange(e)
    }
    return <Switch {...props.control} value={props.value} onChange={onChange} />
}
