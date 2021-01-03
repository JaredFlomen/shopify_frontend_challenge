import React from "react";

const Movies = (props) => {
  const { Nominate, nominee } = props;

  const isNominated = function (movie) {
    if (!nominee) return false;
    const checkNom = nominee.find((e) => e.imdbID === movie.imdbID);
    if (!checkNom) return false;
    return true;
  };

  return props.movies.map((movie) => (
    <div className="d-flex justify-content-start m-3">
      <div className="column">
        <img src={movie.Poster} height="300" alt="poster" />
        <p>{movie.Title}</p>
        <p>{movie.Year}</p>
        <button
          className="btn btn-primary"
          height="50"
          disabled={isNominated(movie)}
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
