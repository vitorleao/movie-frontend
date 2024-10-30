import React from 'react';

  const TableData = ({ children }) => {
    return (
      <td style={{ paddingLeft: '100px' }}>
        {children}
      </td>
    );
  };

  export default TableData;