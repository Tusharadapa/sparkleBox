import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import IndexOne from "./Components/HomePage/indexone";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<IndexOne />} />
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
