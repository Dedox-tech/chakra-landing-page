import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MapPage from "./pages/MapPage";
import AboutUsPage from "./pages/AboutUsPage";
import NewsPage from "./pages/NewsPage";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="*" element={<MainPage />} />
        </Routes>
    );
}
