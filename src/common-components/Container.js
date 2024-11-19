import React from 'react';
import themeColor from '../config/themeColor';
import { FlexDirection, HorizontalAlignment, VerticalAlignment } from '../config/alignment';
import { justifyContent, alignItems, shadow } from '../utils/style/styleUtils';

function Container({ 
	backgroundColor, 
	children, 
	width, 
	height, 
	padding, 
	margin,
	borderRadius, 
	borderWidth, 
	borderStyle, 
	borderColor,
	horizontalAlignment,
	verticalAlignment,
	flexDirection,
	boxShadow,
}) {
	const style = {
		backgroundColor: backgroundColor, 
		display: 'flex',
		flexDirection: flexDirection,
		justifyContent: justifyContent(horizontalAlignment),
		alignItems: alignItems(verticalAlignment),
		width: width, 
		height: height, 
		padding: padding, 
		margin: margin, 
		borderRadius: borderRadius, 
		borderWidth: borderWidth, 
		borderStyle: borderStyle, 
		borderColor: borderColor, 
		boxShadow: boxShadow, 
		overflow: 'hidden', 
	};

	return <div style={style}>{children}</div>;
}

// Định nghĩa defaultProps
Container.defaultProps = {
	backgroundColor: themeColor.background,
	width: 'auto',
	height: 'auto',
	padding: '0',
	margin: '0',
	borderRadius: '0',
	borderWidth: '0',
	borderStyle: 'solid',
	borderColor: 'transparent',
	horizontalAlignment: HorizontalAlignment.LEFT,
	verticalAlignment: VerticalAlignment.TOP,
	boxShadow: shadow({
		offsetX:'10px', 
		offsetY:'10px', 
		blurRadius:'10px', 
		spreadRadius:'20px'
	}),
	flexDirection: FlexDirection.COLUMN
};

export default Container;