import logo from "./logo.svg";
import "./App.css";
import Searcher from "./components/Searcher";
import Display from "./components/Display";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Searcher></Searcher>
        <div className="flex">
          <Display></Display>
        </div>
      </header>
    </div>
  );
}

export default App;
