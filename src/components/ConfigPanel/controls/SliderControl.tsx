import React from "react";
import { SliderControlMeta } from "./types";
import { Col, InputNumber, Row, Slider } from "antd";

export interface SliderControlProps {
    control: SliderControlMeta;
    onChange: (value: number) => void;
    value: number
}
export const SliderControl = (props: SliderControlProps) => {
    const onChange = (e: number | null) => {
        if (e === null) return;
        props.onChange && props.onChange(e);
    }
    return <Row style={{
        width: '100%',
    }}>
        <Col span={18}>
            <Slider
                {...props.control}
                value={props.value}
                onChange={onChange}
            />
        </Col>
        <Col span={6}>
            <InputNumber
                style={{ margin: '0 2px', width: '100%' }}
                value={props.value}
                onChange={e => onChange(e)}
            />
        </Col>
    </Row>
}
