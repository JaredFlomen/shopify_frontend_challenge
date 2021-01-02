import React from "react";

const Movies = (props) => {
  return props.movies.map((movie) => <p>{movie.Title}</p>);
};

export default Movies;
