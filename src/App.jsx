import "./App.scss";
import Header from "./components/header/Header";
import Preview from "./components/preview/Preview";
import Mission from "./components/Mission/Mission";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Preview></Preview>
      <Mission></Mission>
    </div>
  );
}

export default App;
