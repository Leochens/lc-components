import { ConfigPanelData, ConfigPanelMeta, ConfigPanelOnChange, ConfigPanelOptions, ConfigPanelProps } from "./types";

export class ConfigPanelModel {
    data: ConfigPanelData = {};
    meta: Array<ConfigPanelMeta> = [];
    options: ConfigPanelOptions = {};
    onChange: ConfigPanelOnChange = (() => {});
    
    constructor(props: ConfigPanelProps ) {
        this.data = props.data;
        this.meta = props.meta;
        this.options = props.options;
        this.onChange = props.onChange;
    }

    metaIsGroup = (meta: ConfigPanelMeta) => {
        return Array.isArray(meta.children);
    }

    metaIsHidden = (meta: ConfigPanelMeta) => {
        return meta.hidden;
    }

    getMetas = () => {
        return this.meta
    }

    getValue = (meta: ConfigPanelMeta) => {
        const { code } = meta;
        return this.data[code];
    }

}