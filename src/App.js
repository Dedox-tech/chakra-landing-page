import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import MainPage from "./pages/MainPage";
import MapPage from "./pages/MapPage";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<MainPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
    );
}
