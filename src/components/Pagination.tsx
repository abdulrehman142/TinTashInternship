"use client";

import { useState } from "react";
import Pagination from "./Pagination";

// Dummy data
const dummyData = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
  description: `This is the description for item ${i + 1}`,
}));

const DummyTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const startIndex = (currentPage - 1) * limit;
  const currentData = dummyData.slice(startIndex, startIndex + limit);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Pagination
        totalCount={dummyData.length}
        limit={limit}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setLimit={setLimit}
      />

      <h1 className="text-2xl font-bold mb-4">
        Dummy Table with Rows Per Page & Go To Page
      </h1>

      <table className="w-full border border-gray-300 mb-4">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.id}>
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DummyTable;
