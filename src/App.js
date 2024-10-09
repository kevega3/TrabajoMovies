import './App.css';
import { useEffect } from 'react';
import axios from 'axios'
import getConfig  from './config.json';
import {Buscador} from './components/Buscador'
import {Tarjetas} from './components/Tarjetas'
import {Head} from './components/Head'
import { useState } from 'react';


function App() {
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [movie, setMovie] = useState({ title: "Loading Movies" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  
  const openModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const BuscarPeliculas = async (searchKey) => {
    console.log(searchKey)
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${getConfig.API_URL}/${type}/movie`, {
      params: {
        api_key: getConfig.API_KEY,
        query: searchKey,
      },
    });
    setMovies(results);
    setMovie(results[0]);

    if (results.length) {
      await BuscarPelicula(results[0].id);
    }
  };


  const BuscarPelicula = async (id) => {
    const { data } = await axios.get(`${getConfig.API_URL}/movie/${id}`, {
      params: {
        api_key: getConfig.API_KEY,
        append_to_response: "videos",
      },
    });
    console.log(data)

    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : data.videos.results[0]);
    }
    setMovie(data);
  };

  const selectMovie = async (movie) => {
    BuscarPelicula(movie.id);
    openModal(movie)
    console.log(movie)
    setMovie(movie);
  };

  useEffect(() => {
    BuscarPeliculas();
  }, []);


  return (
    <div className='ContenedorPeliculas'>
      <h2 className="text-center mt-5 mb-5 titulo">S.M.A.R MOVIES</h2>
          <Buscador 
            BuscarPeliculas={BuscarPeliculas} 
          />
          <Head 
            movie={movie} 
            getConfig={getConfig} 
            trailer={trailer}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
          <Tarjetas  
          getConfig={getConfig} 
          selectMovie={selectMovie} 
          movies={movies} onClose={() => setIsModalOpen(false)} 
          isOpen={isModalOpen}
          />
    </div>
  );
}

export default App;
