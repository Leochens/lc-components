import React, { Children, CSSProperties } from "react";
import { Collapse, DatePicker } from "antd";
import { ConfigPanelMeta } from "../types";

export interface GroupControlProps {
    meta: ConfigPanelMeta;
    render: (meta: ConfigPanelMeta, style: CSSProperties) => any;
    // onChange: (value: string) => void;
    // value: any
}
export const GroupControl = (props: GroupControlProps) => {
    // const onChange = (date: any, dateString: string | string[]) => {
    //     props.onChange && props.onChange(date)
    // }

    const { meta, render } = props;
    const items = [{
        key: meta.code,
        label: meta.name,
        children: meta.children?.map(meta => render(meta, { margin: '10px 0'})),
        style: {margin: 0, padding: 0}
    }]
    return <Collapse
        bordered={false}
        defaultActiveKey={[meta.code]}
        expandIconPosition="end"
        size="small"
        // expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        // style={{ background: token.colorBgContainer }}
        items={items}
    />
}
