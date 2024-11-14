import React, { useState } from 'react';
import themeColor from '../config/themeColor';

function TextInput({ 
  placeholder, 
  value, 
  onChange, 
  width, 
  height, 
  padding, 
  borderRadius, 
  borderWidth, 
  borderStyle, 
  borderColor,
  margin,
  isPassword
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const inputStyle = {
    width,
    height,
    padding,
    fontSize: '16px',
    border: `${borderWidth} ${borderStyle} ${borderColor}`,
    borderRadius,
    outline: 'none',
    transition: 'border-color 0.3s ease',
    margin,
    paddingRight: '40px', // Extra space for the icon
  };

  const iconStyle = {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = '#6e8efb';
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = borderColor;
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  return (
    <div style={{ position: 'relative' }}>
      <input
        type={isPassword && !isPasswordVisible ? 'password' : 'text'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={inputStyle}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {isPassword && (
        <span 
          style={iconStyle}
          onClick={togglePasswordVisibility}
        >
          {isPasswordVisible ? '👁️' : '🙈'}
        </span>
      )}
    </div>
  );
}

TextInput.defaultProps = {
  placeholder: 'Input text...',
  width: '100%',
  height: '30px',
  padding: '10px',
  borderRadius: '4px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: themeColor.border,
  margin: 'none',
  isPassword: false,
};

export default TextInput;