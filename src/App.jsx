import "./App.scss";
import Header from "./components/header/Header";
import Preview from "./components/preview/Preview";
import Mission from "./components/Mission/Mission";
import Buisness from "./components/Buisness/Buisness";
import Benefits from "./components/Benefits/Benefits";
import Photos from "./components/Photos/Photos";
import Map from "./components/Map/Map";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Preview></Preview>
      <Map></Map>
      <Mission></Mission>
      <Buisness></Buisness>
      <Benefits></Benefits>
      <Photos></Photos>
      <div className="test-block">
        <div className="test"></div>
      </div>
    </div>
  );
}

export default App;
