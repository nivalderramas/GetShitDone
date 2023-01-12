import React from "react";

function SearchBar(props) {

  const { searchValue, setSearchValue } = props;
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  }
  return (
    <>
      <input className="searchBar" 
             placeholder="Search"
             value={searchValue}
             onChange={handleSearchChange}/>
    </>
  );
}

export { SearchBar };
