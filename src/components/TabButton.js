import React from 'react';

const TabButton = ({ onClick, isActive, children }) => (
    <div
        onClick={onClick}
        style={{
            display: 'inline-block',
            padding: '10px 20px',
            margin: '5px',
            cursor: 'pointer',
            backgroundColor: isActive ? '#007BFF' : '#e7e7e7',
            color: isActive ? '#fff' : '#000',
            borderRadius: '4px',
            textAlign: 'center',
            transition: 'background-color 0.3s',
        }}
    >
        {children}
    </div>
);

export default TabButton;