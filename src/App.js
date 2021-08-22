import { useState } from "react";
import MovieList from "./components/MovieList";
import FilterMovie from "./components/FilterMovie";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Nabar from "./components/Nabar"
import {FilmStorage} from "./FilmStorage"

function App() {
  const [movies, setMovies] = useState(FilmStorage);
  const addNewMovie = (newMovie) => {
    setMovies(movies.concat(newMovie));
  };
  const [keyWord, setKeyWord] = useState("");
  const [keyRate, setKeyRate] = useState(1);
  const search = (word) => {
    setKeyWord(word);
  };
  return (
    <div>
      <Nabar/>
      <FilterMovie keyRate={keyRate} setKeyRate={setKeyRate} search={search} />
      <MovieList
        movies={movies.filter(
          (movie) =>
            movie.rate >= keyRate &&
            movie.title.toLowerCase().includes(keyWord.toLowerCase().trim())
        )}
        addNewMovie={addNewMovie}
      />
      <Footer/>
    </div>
  );
}

export default App;
