import React from 'react';

const SearchButton = ({ children }) => {
    return (
        <button type="submit"
            style={{
                display: 'block',
                padding: '10px 10px',
                margin: '10px',
                color: 'white',
                backgroundColor: 'green'
            }}>
            {children}
        </button>
    );
};

export default SearchButton;