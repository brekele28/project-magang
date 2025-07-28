import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import TentangKamiFull from "./pages/TentangKamiFull.jsx";
import BisnisKamiFull from "./pages/BisnisKamiFull.jsx";
import Internship from "./pages/Internship.jsx";
import LowonganKerja from "./pages/LowonganKerja.jsx";
import LowonganKerjaFull from "./pages/LowonganKerjaFull.jsx";

import "remixicon/fonts/remixicon.css";
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tentang-kami" element={<TentangKamiFull />} />
        <Route path="/bisnis-kami" element={<BisnisKamiFull />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/lowongan-kerja" element={<LowonganKerja />} />
        <Route path="/lowongan-full" element={<LowonganKerjaFull />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);