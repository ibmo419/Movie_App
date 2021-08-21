import { useState } from "react";
import MovieList from "./components/MovieList";
import FilterMovie from "./components/FilterMovie";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Nabar from "./components/Nabar"

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Indisputed 4",
      rate: 4,
      description:
        "In the fourth installment of the fighting franchise, Boyka is shooting for the big leagues when an accidental death in the ring makes him question everything he stands for.",
      img:
        "https://images-na.ssl-images-amazon.com/images/I/51NONFCG7cL.jpg",
      hrf:"https://youtu.be/nGvqGxA_RH0"

    },
    {
      title: "Avatar",
      rate: 3,
      description:
        "Avatar (marketed as James Cameron's Avatar) is a 2009 American epic science fiction film directed, written, produced, and co-edited by James Cameron and starring.",
      img:
      "https://media.senscritique.com/media/000019629031/source_big/Avatar.jpg",
      hrf:"https://youtu.be/bcBdTYqBqGY"
    },
    {
      title: "Insuportable",
      rate: 2,
      description:
        "Joe, a former convict, will try to rebuild his life out of sight of all in the deep and remote countryside. In trying to escape his past, he was far from imagining that after 10 years in the closet, a meeting would turn his life upside down .",
      img:
        "https://fr.web.img3.acsta.net/medias/nmedia/18/90/80/25/20114170.jpg",
      hrf:"https://youtu.be/MbIr-8hi3gY"
    },
    {
      title: "Fast&Furious 9",
      rate: 5,
      description:
        "Fast and Furious 9 is an American action film directed by Justin Lin, released in 2021. It is the 10th feature film in the Fast and Furious franchise and the sequel to the movie Fast and Furious 8.",
      img:
        "https://www.betanews.fr/wp-content/uploads/2020/07/Fast-and-Furious-9-Vin-Diesel-John-Cena-starrer-sortira.png",
      hrf:"https://youtu.be/S7_M4MljW2k"
    },
    {
      title: "Avengers",
      rate: 3,
      description:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki from enslaving humanity.",
      img:
        "https://i.pinimg.com/originals/7a/94/80/7a94808dbb3a9a6d922d0780bc9be03d.jpg",
      hrf:"https://youtu.be/g-XPTycrbY8"
    },
    {
      title: "Prestige",
      rate: 4,
      description:
        "The film The Prestige is an adaptation of a book written by Christopher Priest, published in 1995. The feature film, meanwhile, was directed in 2006 by Christopher Nolan.",
      img:
        "https://static.fnac-static.com/multimedia/images_produits/ZoomPE/1/7/4/7321910106471/tsp20130828151349/Le-prestige-DVD.jpg",
      hrf:"https://youtu.be/9UZcD4G-nBA"
    },
    
  ]);
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
