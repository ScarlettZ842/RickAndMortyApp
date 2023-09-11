import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPage: number;
  selectedPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPage,
  selectedPage,
  onPageChange,
}) => {
  const handlePageChange = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  const paginationButtons = [];
  paginationButtons.push(
    <button
      className="pagination-button"
      key="prev"
      onClick={() => handlePageChange(currentPage - 1)}
    >
      &lt;
    </button>
  );
  for (let i = 1; i <= totalPage; i++) {
    paginationButtons.push(
      <button
        className={`pagination-button ${i === selectedPage ? "selected" : ""}`}
        key={i}
        onClick={() => handlePageChange(i)}
        disabled={i === currentPage}
      >
        {i}
      </button>
    );
  }
  paginationButtons.push(
    <button
      className="pagination-button"
      key="next"
      onClick={() => handlePageChange(currentPage + 1)}
    >
      &gt;
    </button>
  );

  return (
    // Render the pagination buttons
    <div className="home-pagination">{paginationButtons}</div>
  );
};

export default Pagination;
