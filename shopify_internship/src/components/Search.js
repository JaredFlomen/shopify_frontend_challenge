import React from "react";

const Search = (props) => {
  return props.movies.map((movie) => <p>{movie.Title}</p>);
};

export default Search;
