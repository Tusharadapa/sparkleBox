import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import IndexOne from "./Components/HomePage/indexone";
import Whyus from "./Components/Pages/WhyUs/whyus";
import AboutUs from "./Components/Pages/AboutUs/aboutus";
import Pnfy from "./Components/Pages/Curriculum/pnfy";
import Nfy from "./Components/Pages/Curriculum/nfy";
import K1fy from "./Components/Pages/Curriculum/k1fy";
import K2fy from "./Components/Pages/Curriculum/k2fy";
import Faq from "./Components/Pages/faq";
import Pricing from "./Components/Pages/pricing";
import Testimonials from "./Components/Pages/testimonials";
import Sbs from "./Components/Pages/sbs";
import Blog from "./Components/Pages/blog";
import News from "./Components/Pages/news";
import ContactUs from "./Components/Pages/contactus";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<IndexOne />} />
            <Route index element={<IndexOne />} />
            <Route path="whyus" element={<Whyus />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="pnfy" element={<Pnfy />} />
            <Route path="nfy" element={<Nfy />} />
            <Route path="k1fy" element={<K1fy />} />
            <Route path="k2fy" element={<K2fy />} />
            <Route path="faq" element={<Faq />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="sbs" element={<Sbs />} />
            <Route path="blog" element={<Blog />} />
            <Route path="news" element={<News />} />
            <Route path="contactus" element={<ContactUs />} />
          </Routes>
        </BrowserRouter>
      </div>

      {/* Back to top Button */}
      {/* <div class="container-top">
        <a href="#" class="top"></a>
      </div> */}
    </>
  );
}

export default App;
