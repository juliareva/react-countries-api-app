import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Navbar } from "./components/Navbar";

import MainPage from "./pages/MainPage";
import CountryPage from "./pages/CountryPage";

function App() {

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/country/:name" element={<CountryPage />} />
      </Routes>

    </div>
  );
}

export default App;
