import React from "react";

const Movies = (props) => {
  return props.movies.map((movie) => (
    <>
      <p>
        {movie.Title}, ({movie.Year})
      </p>
      <img src={movie.Poster} alt="poster" />
    </>
  ));
};

export default Movies;
