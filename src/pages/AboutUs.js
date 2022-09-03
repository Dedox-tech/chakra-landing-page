import React from "react";
import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

export default function MapPage() {
    return (
        <Box>
            <NavBar />
            <AboutUs />
            <Footer />
        </Box>
    );
}
