import React, { CSSProperties } from "react";
import { Tabs } from "antd";
import { ConfigPanelMeta } from "../types";
import { TabsControlMeta } from "./types";

export interface TabsControlProps {
    control: TabsControlMeta;
    render: (meta: ConfigPanelMeta, style: CSSProperties) => any;
    // onChange: (value: string) => void;
    // value: any
}
export const TabsControl = (props: TabsControlProps) => {
    const { control, render } = props;
    const items = control.tabs?.map(tab => ({
        key: tab.code,
        label: tab.name,
        children: tab.children?.map(meta => render(meta, { margin: '10px 0' })),
        style: { margin: 0, padding: 10 }
    }))

    return <Tabs centered {...control} defaultActiveKey={control.defaultTab ?? control.tabs?.[0]?.code} items={items} />
}