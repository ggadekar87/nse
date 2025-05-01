import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
//https://github.com/hi-imcodeman/stock-nse-india
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import NotFound from "./NotFound";
import Layout from "./components/Layout/Layout";
import Support from "./components/Support/Support";
function App() {
  let routes = (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/nse" element={<Home />} />
      <Route path="/Support" element={<Support />} />
      <Route component={NotFound} />
    </Routes>
  );
  return (
    <Layout >{routes}</Layout>
  );
}

export default App;
