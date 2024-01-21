import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import {useState} from "react";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  const [sidebar, showSidebar] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Header sidebar={sidebar} showSidebar={showSidebar} />
        <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
        <Routes>{/* <Route path="/" element={<Home />}></Route> */}</Routes>
        
<Carousel />
<Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
