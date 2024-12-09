import React from "react";
import { DateControlMeta } from "./types";
import { DatePicker } from "antd";

export interface DateControlProps {
    control: DateControlMeta;
    onChange: (value: string) => void;
    value: any
}
export const DateControl = (props: DateControlProps) => {
    const onChange = (date: any, dateString: string | string[]) => {
        props.onChange && props.onChange(date)
    }
    return <DatePicker style={{width: '100%'}} {...props.control} value={props.value} onChange={onChange} />
}
