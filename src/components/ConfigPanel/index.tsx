import React, { useMemo } from "react";
import * as Controls from "./controls/index";
import { ConfigPanelProps } from "./types";
import { ConfigPanelModel } from "./index.model";
import LabelWrap from "./utils/LabelWrap";

const ConfigPanel = (props: ConfigPanelProps) => {
    const model = useMemo(() => {
        return new ConfigPanelModel(props);
    }, [props.data, props.meta])

    const onChange = (code: string, value: any) => {
        props.onChange && props.onChange(code, value);
    }
    const getValue = (key: string) => {
        return props.data[key]
    }
    const renderControls = () => {
        return model.getMetas().map(meta => {
            const { control, name, type, code } = meta;
            const Comp = Controls[`${type}Control`] as any;
            if (!Comp) return null;
            return <LabelWrap key={code} name={name} options={{ labelCol: 4, style: { margin: '10px' } }}>
                <Comp control={control} value={getValue(code)} onChange={(value: any)=>onChange(code, value)} />
            </LabelWrap>
        })
    }
    return <div style={props.styles}>{renderControls()}</div>
}
export default ConfigPanel;