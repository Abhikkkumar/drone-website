import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import Carousel from "./components/Carousel";

import Footer1 from "./components/Footer1";
import Section1 from "./components/Section1";

function App() {
  const [sidebar, showSidebar] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Header sidebar={sidebar} showSidebar={showSidebar} />
        <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
        <Routes>{/* <Route path="/" element={<Home />}></Route> */}</Routes>

        <Carousel />
        <Section1 />
        <Footer1/>
      </div>
    </BrowserRouter>
  );
}

export default App;
