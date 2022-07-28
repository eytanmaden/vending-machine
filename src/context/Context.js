import { createContext } from "react";

const Context = createContext({
  productsList: [],
  setProductsList: () => {},
  cart: [],
  setCart: () => {},
  oneDollarCoins: 0,
  setOneDollarCoins: () => {},
  fiftyCentCoins: 0,
  setFiftyCentCoins: () => {},
  twentyFCentCoins: 0,
  setTwentyFCentCoins: () => {},
  tenCentCoins: 0,
  setTenCentCoins: () => {},
  fiveCentCoins: 0,
  setFiveCentCoins: () => {},
  oneCentCoins: 100,
  setOneCentCoins: () => {},
  myBalance: 0,
  setMyBalance: () => {},
  machineBalance: 0,
  setMachineBalance: () => {},
});

export default Context;
