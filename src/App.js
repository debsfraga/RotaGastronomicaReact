import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";

import Index from "./pages/Index";
import Produtos from "./pages/Produtos";
import Contato from "./pages/Contato";
import Encomendas from "./pages/Encomendas";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/encomendas" element={<Encomendas />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
