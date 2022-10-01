import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/landing-page";
import { GalleryPage } from "./pages/gallery-page";
import { AboutPage } from "./pages/about-page";
import { AdminPage } from "./pages/admin-page";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/galleries" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
