import React, {useState} from 'react';
import themeColor from '../config/themeColor';
import useStates from "../utils/hooks/useStates";

function Text({
    text,
    color = themeColor.textPrimary,
    fontSize = '14px',
    fontWeight = 'normal',
    textAlign = 'left',
    fontFamily = 'Arial, sans-serif',
    fontStyle = 'normal',
    lineHeight = '1.5',
    letterSpacing = 'normal',
    textDecoration = 'none', // Trang trí (gạch chân, gạch ngang...)
    textTransform = 'none',
    margin = '0',
    padding = '0',
    className = '', // CSS class (nếu muốn mở rộng style)
    style = {}, // Style tùy chỉnh
    onClick = null,
}) {
    const [canHover, setCanHover] = useState(onClick != null);

    const combinedStyle = {
        color: canHover ? themeColor.textSecondary : color,
        fontSize,
        fontWeight,
        textAlign,
        fontFamily,
        fontStyle,
        lineHeight,
        letterSpacing,
        textDecoration,
        textTransform,
        margin,
        padding,
        cursor: onClick ? 'pointer' : 'default',
        ...style,
    };

    return (
    <span
        className={className}
        style={combinedStyle}
        onClick={onClick}
        onMouseEnter={() => onClick != null ? setCanHover(true) : null}
        onMouseOut={() => onClick != null ? setCanHover(false) : null}
    >
        {text}
    </span>
    );
}

export default Text;
