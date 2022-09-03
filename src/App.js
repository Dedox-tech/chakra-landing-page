import React from "react";
import { Routes, Route } from "react-router-dom";
import Confirmation from "./pages/Confirmation";
import ContactUs from "./pages/ContactUs";
import MainPage from "./pages/MainPage";
import MapPage from "./pages/MapPage";
import AboutUs from "./components/AboutUs";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<MainPage />} />
            <Route path="/map" element={<MapPage />} />
<<<<<<< HEAD
            <Route path="/about-us" element={<AboutUs/>}/>
=======
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/confirmation" element={<Confirmation />} />
>>>>>>> 1a142c9ce90d7a6506dbd3dfe181eb1557089269
        </Routes>
    );
}
