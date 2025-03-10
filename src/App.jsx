import React from "react";
import { Routes, Route } from "react-router-dom";

import "./index.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Science from "./Components/Science";
import Agriculture from "./Components/Agriculture";
import ITSector from "./Components/ITSector";
import Space from "./Components/Space";
import Tehnology from "./Components/Tehnology";
import Sfera from "./Components/Sfera";
import NanoTeh from "./Components/NanoTeh";
import Brend from "./Components/Brend";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/science" element={<Science />} />
        <Route path="/agriculture" element={<Agriculture />} />
        <Route path="/it-sector" element={<ITSector />} />
        <Route path="/space" element={<Space />} />
        <Route path="/teh" element={<Tehnology />}/>
        <Route path="/sfera" element={<Sfera />}/> 
        <Route path="/nano" element={<NanoTeh />}/> 
        <Route path="brend" element={<Brend />}/>
      </Routes>
     
    </>
  );
};

export default App;
