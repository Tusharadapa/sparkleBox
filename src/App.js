import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import IndexOne from "./Components/HomePage/indexone";
import Whyus from "./Components/Pages/2 WhyUs/whyus";
import AboutUs from "./Components/Pages/3 AboutUs/aboutus";
import Pnfy from "./Components/Pages/Curriculum/Pre-Nursery/pnfy";
import Nfy from "./Components/Pages/Curriculum/Nursery/nfy";
import K1fy from "./Components/Pages/Curriculum/LKG/k1fy";
import K2fy from "./Components/Pages/Curriculum/UKG/k2fy";
import Faq from "./Components/Pages/5 FAQ/faq";
import Pricing from "./Components/Pages/6 Pricing/pricing";
import Testimonials from "./Components/Pages/7 Testimonials/testimonials";
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
