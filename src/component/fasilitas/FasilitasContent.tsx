import React from "react";

interface TableColumn {
  header: string;
  accessor: string;
}

interface TableProps {
  columns: TableColumn[];
  data: any[];
}

const FasilitasContent: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <table className="table-auto font-montserrat text-base sm:text-lg text-ne02">
      <thead className="">
        <tr>
          {columns.map((column, index) => (
            <th key={index} scope="col" className="text-transparent">
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="pb-4">
        {data.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex} className="">
                {item[column.accessor]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FasilitasContent;
