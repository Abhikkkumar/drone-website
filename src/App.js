import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer1 from "./components/Footer1";
import ServiceTemplate from "./components/Template/ServiceTemplate";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import RTPO from "./components/RTPO";
import Footer2 from "./components/Footer2";
import ArticleEvent from "./components/ArticleEvent";
import GiftCityT from "./components/GiftCityT";


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
  vaghaiProps,
  noidaProps,
  saktiProps,
  bagpatProps,
  giftProps
} from "./components/Template/Data";
const ScrollToTop = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  useEffect(() => {
    // Scroll to the top of the page whenever the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [sidebar, showSidebar] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header sidebar={sidebar} showSidebar={showSidebar} />
        <Sidebar sidebar={sidebar} showSidebar={showSidebar} />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/articles-and-events" element={<ArticleEvent />}></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/service" element={<Home />}></Route>
          <Route path="/product" element={<Home />}></Route>
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
          <Route path="/rtpo" element={<RTPO />}></Route>
          <Route path="/vaghai-navsari-agricultural-university,-gujarat" element={<GiftCityT props={vaghaiProps}/>}></Route>
          <Route path="/up-international-trade-show,-noida" element={<GiftCityT props={noidaProps}/>}></Route>
          <Route path="/bharat-drone-shakti,-ghaziabad" element={<GiftCityT props={saktiProps}/>}></Route>
          <Route path="/baghpath-kisan-mela" element={<GiftCityT props={bagpatProps}/>}></Route>
          <Route path="/vibrant-gujarat,-gift-city" element={<GiftCityT props={giftProps}/>}></Route>
        </Routes>

        <Footer1 />
        <Footer2 />
      </div>
    </BrowserRouter>
  );
}

export default App;
