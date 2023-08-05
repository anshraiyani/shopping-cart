import { BrowserRouter, Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home'
import Shop from "./components/Shop";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
