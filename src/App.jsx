import { Header } from "./components/Header";
import { Tile } from "./components/Tile";
import './App.css';
import arrayData from "./data";

function App() {
  const tiles = arrayData.map(location => (
    <>
      <Tile {...location}/>
      <div className="divider"></div>
    </>
  ));
  return (
    <>
      <Header />
      {tiles}
    </>
  )
}

export default App
