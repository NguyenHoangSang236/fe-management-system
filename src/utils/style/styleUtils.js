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
        [HorizontalAlignment.CENTER]: HorizontalAlignment.CENTER,
        [HorizontalAlignment.RIGHT]: 'flex-end',
        [HorizontalAlignment.SPACE_BETWEEN]: HorizontalAlignment.SPACE_BETWEEN,
        [HorizontalAlignment.SPACE_AROUND]: HorizontalAlignment.SPACE_AROUND,
        [HorizontalAlignment.SPACE_EVENLY]: HorizontalAlignment.SPACE_EVENLY,
    };

    return alignmentMap[alignment] || 'flex-start';
}

export const alignItems = (alignment) => {
    const alignmentMap = {
        [VerticalAlignment.TOP]: 'flex-start',
        [VerticalAlignment.CENTER]: VerticalAlignment.CENTER,
        [VerticalAlignment.BOTTOM]: 'flex-end',
    };

    return alignmentMap[alignment] || 'flex-start';
}

