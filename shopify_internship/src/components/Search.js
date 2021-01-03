import React from "react";

const Search = (props) => {
  return (
    <div className="col col=sm-4">
      <input
        placeholder="Search a movie to nominate"
        value={props.value}
        onChange={(e) => props.setTitle(e.target.value)}
      ></input>
    </div>
  );
};

export default Search;
