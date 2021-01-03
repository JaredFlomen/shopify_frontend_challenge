import React from "react";

const Movies = (props) => {
  const { Nominate } = props;

  return props.movies.map((movie) => (
    <div className="d-flex justify-content-start m-3">
      <div className="column">
        <img src={movie.Poster} height="300" alt="poster" />
        <p>
          {movie.Title}, ({movie.Year})
        </p>
        <button
          onClick={() => {
            props.addNominee(movie);
          }}
        >
          <Nominate />
        </button>
      </div>
    </div>
  ));
};

export default Movies;
