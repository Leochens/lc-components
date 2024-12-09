import React from "react";
import { TagControlMeta } from "./types";
import { Tag } from "antd";

export interface TagControlProps {
    control: TagControlMeta;
    value: string
}
export const TagControl = (props: TagControlProps) => {
    const { tags } = props.control;
    return <div style={{width: '100%'}}>
        {tags.map(tag => <Tag key={tag.text} {...tag}>{tag.text}</Tag>)}
    </div>
}
