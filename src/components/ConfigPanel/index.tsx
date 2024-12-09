import React, { CSSProperties, useMemo } from "react";
import * as Controls from "./controls/index";
import { ConfigPanelMeta, ConfigPanelProps } from "./types";
import { ConfigPanelModel } from "./index.model";
import LabelWrap from "./utils/LabelWrap";
import { ControlType } from "./controls/types";

const SHOULD_RENDER_CHILDREN = [ControlType.Group];
export const ConfigPanel = (props: ConfigPanelProps) => {
    const model = useMemo(() => {
        return new ConfigPanelModel(props);
    }, [props.data, props.meta])

    const onChange = (code: string, value: any) => {
        props.onChange && props.onChange(code, value);
    }
    const getValue = (key: string) => {
        return props.data[key]
    }

    const renderItem = (meta: ConfigPanelMeta, style: CSSProperties = { margin: '10px 10px' }) => {
        const { control, name, type, code } = meta;
        const controlCode = `${type}Control` as ControlType;
        // @ts-ignore 单个属性渲染
        const Comp = Controls[controlCode] as any;
        if (!Comp) return null;
        // 分组 递归渲染子级
        if (SHOULD_RENDER_CHILDREN.includes(type)) {
            return <Comp meta={meta} render={renderItem} />
        }
        const rendered = <Comp render={renderItem} control={control} value={getValue(code)} onChange={(value: any) => onChange(code, value)} />;
        if (control.hideLabel) return rendered
        return <LabelWrap key={code} name={name} options={{ labelCol: 4, style }}>
            {rendered}
        </LabelWrap>
    }
    const renderControls = () => {
        return model.getMetas().map(meta => renderItem(meta))
    }
    return <div style={props.styles}>{renderControls()}</div>
}
export default ConfigPanel;