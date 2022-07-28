import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Context from "./context/Context";
import MainPage from './components/MainPage';
import Products from './components/Products';
import { useState } from 'react';

function App() {
  const [productsList, setProductsList] = useState([]);
  const [cart, setCart] = useState([]);
  const [oneDollarCoins, setOneDollarCoins] = useState(0);
  const [fiftyCentCoins, setFiftyCentCoins] = useState(0);
  const [twentyFCentCoins, setTwentyFCentCoins] = useState(0);
  const [tenCentCoins, setTenCentCoins] = useState(0);
  const [fiveCentCoins, setFiveCentCoins] = useState(0);
  const [oneCentCoins, setOneCentCoins] = useState(100);
  const [myBalance, setMyBalance ] = useState(0);
  const [machineBalance, setMachineBalance] = useState(0);


  return (
    <div className="App">
      <Context.Provider
        value={{
          productsList: productsList,
          setProductsList: setProductsList,
          cart: cart,
          setCart: setCart,
          oneDollarCoins: oneDollarCoins,
          setOneDollarCoins: setOneDollarCoins,
          fiftyCentCoins: fiftyCentCoins,
          setFiftyCentCoins: setFiftyCentCoins,
          twentyFCentCoins: twentyFCentCoins,
          setTwentyFCentCoins: setTwentyFCentCoins,
          tenCentCoins: tenCentCoins,
          setTenCentCoins: setTenCentCoins,
          fiveCentCoins: fiveCentCoins,
          setFiveCentCoins: setFiveCentCoins,
          oneCentCoins: oneCentCoins,
          setOneCentCoins: setOneCentCoins,
          myBalance: myBalance,
          setMyBalance: setMyBalance,
          machineBalance: machineBalance,
          setMachineBalance: setMachineBalance
        }}
      >
        <Router>
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/products" element={<Products />} />
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
