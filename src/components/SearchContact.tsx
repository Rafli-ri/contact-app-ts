import React from "react";
import { SearchContainer, InputSearch } from "../style/style";

const SearchContact: React.FC<{
  search: string;
  onSearch: any;
}> = ({ search, onSearch }) => {
  return (
    <>
      <SearchContainer>
        <h2>Search Contact</h2>
        <div>
          <InputSearch
            type="text"
            name="search"
            id="search"
            defaultValue={search}
            onChange={onSearch}
            placeholder="Search...."
          />
        </div>
      </SearchContainer>
    </>
  );
};

export default SearchContact;
