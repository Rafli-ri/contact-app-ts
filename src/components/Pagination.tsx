import React from "react";
import { css } from "@emotion/react";

const breakpoints: number[] = [576, 768, 992, 1200];
const mq = (n: number) => `@media (max-width: ${breakpoints[n]}px)`;

const PaginationContainer = css`
  display: flex;
  align-items: center;
  gap: 30px;
  ${mq(1)} {
    width: 90%;
    align-items: center;
    margin-bottom: 100px;
    margin-inline: auto;
  }
`;

const PaginationButton = css`
  background-color: #6c63ff;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  outline: none;
  border: none;
  padding: 10px 1rem;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  &:hover {
    background-color: #fff;
    color: #6c63ff;
  }
`;

interface Page {
  page: number;
  prevPage: () => void;
  nextPage: () => void;
}

const Pagination: React.FC<Page> = ({ page, prevPage, nextPage }) => {
  return (
    <div css={PaginationContainer}>
      <button css={PaginationButton} disabled={!page} onClick={prevPage}>
        Previous
      </button>
      <span> Page {page + 1}</span>
      <button css={PaginationButton} onClick={nextPage}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
