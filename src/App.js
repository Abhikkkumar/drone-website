import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

import Footer1 from "./components/Footer1";

import Services from "./components/page2/Services";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const [sidebar, showSidebar] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Header sidebar={sidebar} showSidebar={showSidebar} />
        <Sidebar sidebar={sidebar} showSidebar={showSidebar} />

        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/services" element={<Services />}></Route>
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Routes>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer1 />
      </div>
    </BrowserRouter>
  );
}

export default App;
