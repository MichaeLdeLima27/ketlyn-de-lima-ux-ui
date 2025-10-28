import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cursor from "./components/Cursor";

// Pages
import Hero from "./components/Hero";
import ProjetoLuke from "./pages/projetos/ProjetoLuke";
import ProjetoSumup from "./pages/projetos/ProjetoSumup";
import ProjetoItau from "./pages/projetos/ProjetoItau";
import ProjetoFood from "./pages/projetos/ProjetoFood";

// Fallback simples
const NotFound = () => (
  <div style={{ padding: 40, textAlign: "center" }}>
    <h2>Página não encontrada</h2>
  </div>
);

function App() {
  return (
    <Router>
      <Cursor />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projetos/luke" element={<ProjetoLuke />} />
        <Route path="/projetos/sumup" element={<ProjetoSumup />} />
        <Route path="/projetos/itau" element={<ProjetoItau />} />
        <Route path="/projetos/food" element={<ProjetoFood />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
