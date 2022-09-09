import React from "react";
import { Routes, Route } from "react-router-dom";
import Confirmation from "./pages/Confirmation";
import ContactUs from "./pages/ContactUs";
import MainPage from "./pages/MainPage";
import MapPage from "./pages/MapPage";
import AboutUsPage from "./pages/AboutUsPage";
import NewsPage from "./pages/NewsPage";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/news" element={<NewsPage/>}/>
            <Route path="*" element={<MainPage />} />
        </Routes>
    );
}
