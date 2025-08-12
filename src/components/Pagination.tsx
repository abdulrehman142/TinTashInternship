'use client';

import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';

interface PaginationProps {
  totalCount: number;
  limit: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = ({
  totalCount,
  limit,
  currentPage,
  setCurrentPage,
  setLimit,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalCount / limit);

  const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(e.target.value));
    setCurrentPage(1); 
  };

  const handleGoToPage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = (e.currentTarget.elements.namedItem('goto') as HTMLInputElement);
    const page = Number(input.value);
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
    input.value = ''; 
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-8 w-full bg-white dark:bg-surface p-4">
      {/* Rows per page */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Rows per page:</span>
        <select
          value={limit}
          onChange={handleLimitChange}
          className="border rounded px-2 py-1 text-sm"
        >
          {[10, 25, 50, 100].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      {/* Page info + controls */}
      <div className="flex items-center gap-8">
        <p className="text-sm font-medium">
          Page {currentPage} of {totalPages}
        </p>

        {/* Go to page */}
        <form onSubmit={handleGoToPage} className="flex items-center gap-2">
          <input
            type="number"
            name="goto"
            min="1"
            max={totalPages}
            placeholder="Go to"
            className="w-16 border rounded px-2 py-1 text-sm"
          />
          <button
            type="submit"
            className="px-2 py-1 border rounded text-sm bg-gray-100 hover:bg-gray-200"
          >
            Go
          </button>
        </form>

        {/* Prev / Next buttons */}
        <div className="flex items-center gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="!p-1 border rounded disabled:opacity-50"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="!p-1 border rounded disabled:opacity-50"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Dummy data
const dummyData = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
  description: `This is the description for item ${i + 1}`,
}));

export default function DummyTableWithPagination() {
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
      <h1 className="text-2xl font-bold mb-4">Dummy Table with Rows Per Page & Go To Page</h1>

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
}
