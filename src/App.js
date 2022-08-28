import { useEffect, useState } from 'react';
import Movie from "./components/Movie";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}









// function App() {

//   const [loading, setLoading] = useState(true);
//   const [coins, setCoins] = useState([]);

//   useEffect(() => {
//     fetch("https://api.coinpaprika.com/v1/tickers")
//       .then((response) => response.json())
//       .then((json) => {
//         setCoins(json);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>The Coins!{loading ? "" :  `(${coins.length})`} </h1>
//       {loading ? <strong>Loading...</strong> : <select>
//         {coins.map((coin) => (
//           <option>
//             {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
//           </option>
//         ))}
//       </select>
//       }
//     </div>
//   );
// }

export default App;
