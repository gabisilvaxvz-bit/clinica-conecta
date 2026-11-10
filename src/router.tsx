import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/home";
import FilaOnline from "./pages/FilaOnline/filaOnline";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fila-online" element={<FilaOnline />} />
      </Routes>
    </BrowserRouter>
  );
}