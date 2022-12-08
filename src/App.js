import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Hobbies from "./pages/Hobbies";
import Contact from "./pages/Contact";
import Error from './pages/Error';

const App = () => {
  return <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/hobbies" element={<Hobbies/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Error />} />
      
      </Routes>
    </div>
};



export default App;
