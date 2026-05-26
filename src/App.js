import "./App.css";
import Home from "./components/Home";
//https://github.com/hi-imcodeman/stock-nse-india
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import NotFound from "./NotFound";
import Layout from "./components/Layout/Layout";
import Support from "./components/Support/Support";
import NseStock from "./components/NSE/nse-stock";
function App() {
  let routes = (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/support" element={<Support />} />
      <Route path="/nse-stock" element={<NseStock />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
  return (
    <Layout>{routes}</Layout>
  );
}

export default App;
