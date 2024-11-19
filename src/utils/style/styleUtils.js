import { HorizontalAlignment, VerticalAlignment } from "../../config/alignment";
import themeColor from "../../config/themeColor";

export const shadow = ({ 
    offsetX = "0px",
    offsetY = "4px",
    blurRadius = "10px",
    spreadRadius = "0px",
    color = themeColor.secondary
}) => {
    return `${offsetX} ${offsetY} ${blurRadius} ${spreadRadius} ${color}`;
}

export const justifyContent = (alignment) => {
    const alignmentMap = {
        [HorizontalAlignment.LEFT]: 'flex-start',
        [HorizontalAlignment.CENTER]: 'center',
        [HorizontalAlignment.RIGHT]: 'flex-end',
    };

    return alignmentMap[alignment] || 'flex-start';
}

export const alignItems = (alignment) => {
    const alignmentMap = {
        [VerticalAlignment.TOP]: 'flex-start',
        [VerticalAlignment.CENTER]: 'center',
        [VerticalAlignment.BOTTOM]: 'flex-end',
    };

    return alignmentMap[alignment] || 'flex-start';
}

