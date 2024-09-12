import { ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/solid';

function Pagination({ currentPage, setPage, totalPages }) {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const handlePrevPage = () => {
    if (!isFirstPage) setPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (!isLastPage) setPage(currentPage + 1);
  };

  return (
    <div className="flex items-center justify-center space-x-4 mt-6">

      <button
        onClick={handlePrevPage}
        className={`p-2 rounded-full bg-gray-700 hover:bg-yellow-500 transition ${
          isFirstPage ? 'cursor-not-allowed opacity-50' : ''
        }`}
        disabled={isFirstPage}
      >
        <ChevronLeftIcon className="h-5 w-5 text-gray-100" />
      </button>

      <span className="text-gray-100 font-medium">
        Page {currentPage}
      </span>

      <button
        onClick={handleNextPage}
        className={`p-2 rounded-full bg-gray-700 hover:bg-yellow-500 transition ${
          isLastPage ? 'cursor-not-allowed opacity-50' : ''
        }`}
        disabled={isLastPage}
      >
        <ChevronRightIcon className="h-5 w-5 text-gray-100" />
      </button>
    </div>
  );
}

export default Pagination;