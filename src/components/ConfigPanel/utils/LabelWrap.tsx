import React from "react";
import { Row, Col } from 'antd'
export interface LabelWrapOptions {
    labelCol: number
    style: React.CSSProperties
}
export interface LabelWrapProps {
    children: any;
    name: string;
    options?: LabelWrapOptions;
}
const LabelWrap = ({ children, name, options }: LabelWrapProps) => {
    return <Row style={{ width: '100%', display: 'flex', alignItems: 'center', ...options?.style }}>
        <Col span={options?.labelCol ?? 4}>{name}</Col>
        <Col span={20 - (options?.labelCol ?? 4)}>
            {children}
        </Col>
    </Row>

}
export default LabelWrap;