import React from "react";
import "./index.css";
const SearchInput = () => {
  return (
    <>
      <input type="search" placeholder="Search Reddit" style={{
        textDecoration: "none", border: "none" , backgroundColor:"var(--b)" ,outline : "none" , textDecoration : "none"
      }} />
    </>
  );
};

export default SearchInput;
