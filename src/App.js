import React, { useEffect } from "react";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=3e3e4bd7";
const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <div>
      <h1>Filmy</h1>
      <div>
        <input
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img src="" onClick={() => {}} alt="" />
      </div>
      <div>{searchMovies}</div>
    </div>
  );
};

export default App;
