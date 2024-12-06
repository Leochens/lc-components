import React, { ChangeEvent } from "react";
import { TimeControlMeta } from "./types";
import { TimePicker, TimePickerProps } from "antd";

export interface TimeControlProps {
    control: TimeControlMeta;
    onChange: (date: string) => void;
    value: TimePickerProps['value'];
}
export const TimeControl = (props: TimeControlProps) => {
    const onChange: TimePickerProps['onChange'] = (e, str) => {
        props.onChange && props.onChange(str as string);
    }
    return <TimePicker {...props.control} value={props.value} onChange={onChange} />
}
