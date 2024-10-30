import React from 'react';

const InlineText = ({ label, text }) => {
    return (
        <p style={{ display: 'inline', paddingLeft: '10px' }}>
            <strong>{label}: </strong> {text}
        </p>
    );
};

export default InlineText;