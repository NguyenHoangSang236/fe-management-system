import React, { useState } from 'react';
import PropTypes from 'prop-types';
import themeColor from '../config/themeColor';

const PasswordToggleIcon = ({ isVisible, onClick }) => (
    <span 
        style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
        }}
        onClick={onClick}
        aria-label={isVisible ? 'Hide password' : 'Show password'}
        role="button"
    >
        {isVisible ? '👁️' : '🙈'}
    </span>
);

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
    backgroundColor,
    isPassword,
    disabled,
    loading
}) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const inputStyle = {
        width: width || '100%',
        height: height || 'inherit',
        fontSize: '16px',
        border: `${borderWidth} ${borderStyle} ${borderColor}`,
        borderRadius,
        outline: 'none',
        transition: 'border-color 0.3s ease',
        backgroundColor,
        padding: padding || '10px',
        cursor: disabled ? 'not-allowed' : 'text',
        opacity: disabled ? 0.6 : 1,
    };

    const inputContainerStyle = {
        position: 'relative',
        width,
        height,
        margin,
        padding,
    };

    const togglePasswordVisibility = () => {
        if (!disabled) setIsPasswordVisible(prev => !prev);
    };

    return (
        <div style={inputContainerStyle}>
            {loading && <span>Loading...</span>}
            <input
                type={isPassword && !isPasswordVisible ? 'password' : 'text'}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={inputStyle}
                disabled={disabled}
            />
            {isPassword && (
                <PasswordToggleIcon 
                    isVisible={isPasswordVisible} 
                    onClick={togglePasswordVisibility} 
                />
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
    backgroundColor: themeColor.background,
    margin: 'none',
    isPassword: false,
    disabled: false,
    loading: false,
};

TextInput.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
    padding: PropTypes.string,
    borderRadius: PropTypes.string,
    borderWidth: PropTypes.string,
    borderStyle: PropTypes.string,
    borderColor: PropTypes.string,
    margin: PropTypes.string,
    backgroundColor: PropTypes.string,
    isPassword: PropTypes.bool,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
};

export default TextInput;
