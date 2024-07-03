import React from 'react';
import '../styles/content/emptable.css'
function emptable({data, columns}) {
  return (
    <div>
        <table class="table align-middle mb-0 bg-white">
            <thead class="bg-light">
                <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}

            </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>
                  {column.render ? column.render(row[column.field], row) : row[column.field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        </table>

      </div>
  );
}

export default emptable;