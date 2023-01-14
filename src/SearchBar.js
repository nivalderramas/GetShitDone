import React from "react";

function SearchBar(props) {

  const { searchValue, setSearchValue } = props;
  return (
    <>
      <input className="searchBar" 
             placeholder="Search"
             value={searchValue}
             onChange={(e)=>{setSearchValue(e.target.value)}}/>
    </>
  );
}

export { SearchBar };
