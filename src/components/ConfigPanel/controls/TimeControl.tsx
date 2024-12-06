import React, { ChangeEvent } from "react";
import { TimeControlMeta } from "./types";
import { TimePicker, TimePickerProps } from "antd";
import dayjs from 'dayjs';
export interface TimeControlProps {
    control: TimeControlMeta;
    onChange: (date: string) => void;
    value: any;
}
export const TimeControl = (props: TimeControlProps) => {
    const onChange: TimePickerProps['onChange'] = (e, str) => {
        props.onChange && props.onChange(str as string);
    }
    return <TimePicker {...props.control} value={dayjs(props.value, 'HH:mm:ss')} onChange={onChange} />
}
