import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MapPage from "./pages/MapPage";
import AboutUs from "./components/AboutUs";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<MainPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/about-us" element={<AboutUs/>}/>
        </Routes>
    );
}
