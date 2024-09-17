import React from "react";

interface TableColumn {
  header: string;
  accessor: string;
}

interface TableProps {
  columns: TableColumn[];
  data: { label: string; value: string }[];
}

const FasilitasContent: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="">
      <table className="font-montserrat text-base sm:text-lg text-ne02 w-full border-collapse">
        <tbody>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex} className="border-b border-transparent">
              <td className="whitespace-nowrap">{item.label}</td>
              <td className="px-2 whitespace-nowrap">:</td>
              <td className="px-4">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FasilitasContent;
