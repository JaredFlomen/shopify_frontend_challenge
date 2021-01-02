import React from "react";

const Search = (props) => {
  return (
    <input
      value={props.value}
      onChange={(e) => props.setTitle(e.target.value)}
    ></input>
  );
};

export default Search;
