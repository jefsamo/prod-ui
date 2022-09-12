import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Haven from "./Pages/Haven/Haven";
import Souls from "./Pages/Souls/Souls";
import WalletChecker from "./Pages/WalletChecker/WalletChecker";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/haven" element={<Haven />} />
        <Route path="/souls" element={<Souls />} />
        <Route path="/wallet-checker" element={<WalletChecker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
