import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
//https://github.com/hi-imcodeman/stock-nse-india
import "bootstrap/dist/css/bootstrap.min.css";
import MenuBar from "./components/MenuBar/MenuBar";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span class="label info"> C:\UI\1 NSE\api\stock-nse-india\src</span>
        <MenuBar></MenuBar>
        <Home></Home>
      </header>
    </div>
  );
}

export default App;
