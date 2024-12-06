import React from "react";
import { CustomControlMeta } from "./types";

export interface CustomControlProps {
    control: CustomControlMeta;
    onChange: (value: any) => void;
    value: any;
}
export const CustomControl = (props: CustomControlProps) => {
    // const onChange: TimePickerProps['onChange'] = (e, str) => {
    //     props.onChange && props.onChange(str as string);
    // }
    return <>

    </>
}
