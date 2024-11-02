import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import MovieLog from "./components/MovieLog/MovieLog.jsx";
import { GlobaleStyle } from "./globalStyles.js";
import { useEffect } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const key = "3e103b38";
  const baseUrl = `https://www.omdbapi.com/`;

  const [searchData, setSearchData] = React.useState({});
  const [movieLog, setMovieLog] = React.useState([
    {
      Title: "Harry Potter and the Deathly Hallows: Part 2",
      Year: "2011",
      imdbID: "tt1201607",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTA1Mzc2N2ItZWRiNS00MjQzLTlmZDQtMjU0NmY1YWRkMGQ4XkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "The Batman",
      Year: "2022",
      imdbID: "tt1877830",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Her",
      Year: "2013",
      imdbID: "tt1798709",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA1Nzk0OTM2OF5BMl5BanBnXkFtZTgwNjU2NjEwMDE@._V1_SX300.jpg",
    },
    {
      Title: "Soul",
      Year: "2020",
      imdbID: "tt2948372",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTZkYjA5MDEtMjY1ZC00ODk5LThjOTUtZDYxODEzYWNjMTU2XkEyXkFqcGc@._V1_SX300.jpg",
    },
  ]);

  useEffect(() => {
    if (!searchTerm) {
      return;
    }

    const fetchTitle = async () => {
      const response = await fetch(`${baseUrl}?s=${searchTerm}&apikey=${key}`);
      const data = await response.json();
      setSearchData(data);
    };
    fetchTitle();
  }, [searchTerm]);

  return (
    <div>
      <Navbar />
      <SearchBar
        setSearchTerm={setSearchTerm}
        searchData={searchData ? searchData.Search : null}
        setMovieLog={setMovieLog}
      />

      {movieLog.length > 0 && (
        <MovieLog setMovieLog={setMovieLog} movieLog={movieLog} />
      )}
      <GlobaleStyle />
    </div>
  );
};

export default App;
