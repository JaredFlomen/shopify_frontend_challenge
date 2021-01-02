import React, { useEffect, useState } from "react";
import "./App.css";
import Movies from "./components/Movies";
import Header from "./components/Header";
import Search from "./components/Search";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");

  const searchResults = async () => {
    const url = `http://www.omdbapi.com/?s=avengers&apikey=8e6731b`;
    const response = await fetch(url);
    const responseJSON = await response.json();
    console.log(responseJSON);
    setMovies(responseJSON.Search);
  };
  useEffect(() => {
    searchResults();
  }, [title]);
  return (
    <div>
      <Header />
      <Search title={title} setTitle={setTitle} />
      <Movies movies={movies} />
    </div>
  );
};

export default App;
