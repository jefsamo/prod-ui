import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Haven from "./Pages/Haven/Haven";
import Souls from "./Pages/Souls/Souls";
import WalletChecker from "./Pages/WalletChecker/WalletChecker";
import SoulMap from "./Pages/SoulMap/SoulMap";
import ApplyForWL from "./Pages/ApplyForWL/ApplyForWL";
import StyleYourself from "./Pages/StyleYourself/StyleYourself";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/haven" element={<Haven />} />
          <Route path="/souls" element={<Souls />} />
          <Route path="/wallet-checker" element={<WalletChecker />} />
          <Route path="/soul-map" element={<SoulMap />} />
          <Route path="/whitelist" element={<ApplyForWL />} />
          <Route path="/style-yourself" element={<StyleYourself />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
