import { ControlMeta, ControlMetaByType, ControlType } from "./controls/types";

/**
 * 传入配置面板的数据
 */
export interface ConfigPanelData extends Record<string, any> { }

/**
 * 传入配置面板的控制器描述
 */
export interface ConfigPanelMeta {
    name: string;
    code: string;
    type: ControlType
    control: ControlMetaByType<ControlType>;
    hidden?: boolean;
    children?: Array<ConfigPanelMeta>
}

/**
 * 配置面板的可选参数配置
 */
export interface ConfigPanelOptions {

}

/**
 * 配置面板的Change事件
 */
export type ConfigPanelOnChange = (code:string, value: any) => void;


export interface ConfigPanelProps {
    data: ConfigPanelData;
    meta: Array<ConfigPanelMeta>;
    options: ConfigPanelOptions;
    styles: React.CSSProperties;
    onChange: ConfigPanelOnChange;
}