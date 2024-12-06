import React from "react";
import { SelectControlMeta } from "./types";
import { Select } from "antd";

export interface SelectControlProps {
    control: SelectControlMeta;
    value: any;
    onChange: (value: string) => void;

}
export const SelectControl = (props: SelectControlProps) => {
    const onChange = (e: any) => {
        props.onChange && props.onChange(e)
    }
    return <Select {...props.control} value={props.value} onChange={onChange} />
}