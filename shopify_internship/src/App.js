import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Movies from "./components/Movies";
import Header from "./components/Header";
import Search from "./components/Search";
import Nominate from "./components/Nominate";
import RemoveNominee from "./components/RemoveNominee";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [nominee, setNominee] = useState([]);

  const searchResults = async (title) => {
    const url = `http://www.omdbapi.com/?s=${title}&apikey=8e6731b`;
    const response = await fetch(url);
    const responseJSON = await response.json();
    if (responseJSON.Search) setMovies(responseJSON.Search);
  };

  useEffect(() => {
    searchResults(title);
  }, [title]);

  const addNominee = (movie) => {
    const newNominees = [...nominee, movie];
    setNominee(newNominees);
  };

  const removeNominee = (movie) => {
    const updateNominees = nominee.filter((nom) => nom.imdbID !== movie.imdbID);
    setNominee(updateNominees);
  };

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <Header title="The Shoppies" />
        <Search title={title} setTitle={setTitle} />
      </div>
      <div className="row">
        <Movies
          movies={movies}
          Nominate={Nominate}
          addNominee={addNominee}
          nominee={nominee}
        />
      </div>
      <Header title="Nominations" />
      <div className="row">
        <Movies
          movies={nominee}
          Nominate={RemoveNominee}
          addNominee={removeNominee}
        />
      </div>
      {nominee.length > 4 && <p>5 Nominated</p>}
    </div>
  );
};

export default App;
