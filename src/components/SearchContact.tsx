import React from "react";
import { css } from "@emotion/react";

const breakpoints: number[] = [576, 768, 992, 1200];
const mq = (n: number) => `@media (max-width: ${breakpoints[n]}px)`;

const SearchContainer = css`
  margin: 7rem auto 2rem;
  max-width: 100%;
  width: 40rem;
  ${mq(1)} {
    max-width: 90%;
    margin-inline: auto;
  }
`;

const InputSearch = css`
  width: 100%;
  padding: 15px;
  border: 2px solid #f4f4f4;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  &:focus {
    border: 2px solid #6c63ff;
  }
`;

const SearchContact: React.FC<{
  search: string;
  onSearch: any;
}> = ({ search, onSearch }) => {
  return (
    <>
      <div css={SearchContainer}>
        <h2>Search Contact</h2>
        <div>
          <input
            css={InputSearch}
            type="text"
            name="search"
            id="search"
            defaultValue={search}
            onChange={onSearch}
            placeholder="Search...."
          />
        </div>
      </div>
    </>
  );
};

export default SearchContact;
