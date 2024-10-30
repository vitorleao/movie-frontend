import React from 'react';

const TableHeader = ({ children }) => {
    return (
      <th style={{ paddingLeft: '100px' }}>
        {children}
      </th>
    );
  };

export default TableHeader;