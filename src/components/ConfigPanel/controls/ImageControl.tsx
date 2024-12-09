import React from "react";
import { ImageControlMeta } from "./types";
import { Image } from 'antd';

/**
 * 图片组件
 * 1. 支持上传图片
 * 2. 支持预览图片
 * 3. 支持裁剪图片
 * 4. 支持设置图床
 */

export interface ImageControlProps {
    control: ImageControlMeta;
    onChange: (value: string) => void;
    value: any
}
export const ImageControl = (props: ImageControlProps) => {
    const onChange = (Image: any, ImageString: string | string[]) => {
        props.onChange && props.onChange(Image)
    }
    return <div>
        <Image
            width={200}
            src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
        />
    </div>
}
