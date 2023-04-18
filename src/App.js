import React from "react";
import "./styles/main.css";
import { Route, Routes } from "react-router-dom";
import { FindHome } from "./pages/FindHome";
import { About } from "./pages/About";
import { Contacts } from './pages/Contacts'
import { House } from "./pages/House";
import { PersonalCab } from "./pages/PersonalCab";
import { Admin } from "./pages/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FindHome />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/house/:id" element={<House />} />
      <Route path="/lk" element={<PersonalCab />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
