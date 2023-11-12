import React from "react";
import { PaginationContainer, PaginationButton } from "../style/style";
interface Page {
  page: number;
  prevPage: () => void;
  nextPage: () => void;
}

const Pagination: React.FC<Page> = ({ page, prevPage, nextPage }) => {
  return (
    <div>
      <PaginationContainer>
        <PaginationButton disabled={!page} onClick={prevPage}>
          Previous
        </PaginationButton>
        <span> Page {page + 1}</span>
        <PaginationButton onClick={nextPage}>Next</PaginationButton>
      </PaginationContainer>
    </div>
  );
};

export default Pagination;
