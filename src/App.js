import React from 'react';
 import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFoundPage";
import ScieToupie from "./pages/ScieToupie"
import RaboDegau from './pages/RaboDegau';
import ScieaRuban from './pages/ScieaRuban';
import Outillages from './pages/Outillages.tsx';
import Scieonglet from './pages/ScieOnglet';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/RaboDegau" element={<RaboDegau />}></Route>
        <Route path="/ScieToupie" element={<ScieToupie />}></Route>
        <Route path="/ScieaRuban" element={<ScieaRuban />}></Route>
        <Route path="/Scieonglet" element={<Scieonglet />}></Route>
        <Route path="/Outillages" element={<Outillages />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
