import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
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
