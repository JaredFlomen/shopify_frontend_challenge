import React, { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchResults = async () => {
    const url = `http://www.omdbapi.com/?s=avengers&apikey=8e6731b`;
    const response = await fetch(url);
    const responseJSON = await response.json();
    console.log(responseJSON);
    setMovies(responseJSON.Search);
  };
  useEffect(() => {
    searchResults();
  }, []);
  return <Search movies={movies} />;
};

export default App;
