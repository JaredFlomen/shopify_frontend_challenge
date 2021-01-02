import React, { useEffect, useState } from "react";
import "./App.css";
import Movies from "./components/Movies";
import Header from "./components/Header";
import Search from "./components/Search";
import Nominate from "./components/Nominate";

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
  return (
    <div>
      <Header />
      <Search title={title} setTitle={setTitle} />
      <Movies movies={movies} Nominate={Nominate} />
    </div>
  );
};

export default App;
