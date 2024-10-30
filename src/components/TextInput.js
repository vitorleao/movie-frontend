import React from 'react';

const TextInput = ({ value, onChange, placeholder }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            style={{
                display: 'block',
                padding: '10px 10px',
                margin: '10px',
            }}
        />
    );
};

export default TextInput;