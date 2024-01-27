import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

import Header from "./components/Header";
import Footer1 from "./components/Footer1";
import ServiceTemplate from "./components/Template/ServiceTemplate";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Gallery from "./components/Gallery";

import {
  agricultureSprayingProp,
  landMappingProp,
  landSurveillanceProp,
  disasterManagementProp,
  pilotTrainingProp,
  th_agri_16,
  th_agri_10,
  Naina,
  Surveillance,
} from "./components/Template/Data";

function App() {
  const [sidebar, showSidebar] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header sidebar={sidebar} showSidebar={showSidebar} />
        <Sidebar sidebar={sidebar} showSidebar={showSidebar} />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="/agriculture-spraying"
            element={<ServiceTemplate props={agricultureSprayingProp} />}
          ></Route>
          <Route
            path="/land-mapping"
            element={<ServiceTemplate props={landMappingProp} />}
          ></Route>
          <Route
            path="/land-surveillance"
            element={<ServiceTemplate props={landSurveillanceProp} />}
          ></Route>
          <Route
            path="/disaster-management"
            element={<ServiceTemplate props={disasterManagementProp} />}
          ></Route>
          <Route
            path="/pilot-training"
            element={<ServiceTemplate props={pilotTrainingProp} />}
          ></Route>
          <Route
            path="/thea-agriculture-drone-16-litres"
            element={<ServiceTemplate props={th_agri_16} />}
          ></Route>
          <Route
            path="/thea-agriculture-drone-10-litres"
            element={<ServiceTemplate props={th_agri_10} />}
          ></Route>
          <Route
            path="/naina-disaster-management-drone"
            element={<ServiceTemplate props={Naina} />}
          ></Route>
          <Route
            path="/surveillance-drone"
            element={<ServiceTemplate props={Surveillance} />}
          ></Route>
          <Route
            path="/gallery"
            element={<Gallery  />}
          ></Route>
        </Routes>

        <Footer1 />
      </div>
    </BrowserRouter>
  );
}

export default App;
