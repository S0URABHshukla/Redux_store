import "./App.css";
import Header from "./Practice/Header";
import Restaurents from "./Practice/Restaurents";
// import Restaurants from "./Component/Restaurants";

export default function App() {
  return <div className="App">
    {/* <Restaurants/> */}
    <Header/>
    <Restaurents/>
  </div>;
}
