import React from "react";
import { Box } from "@chakra-ui/react";

import NavBar from "../components/NavBar";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";

export default function MainPage() {
    return (
        <Box>
            <NavBar />
            <AboutUs />
            <Footer />
        </Box>
    );
}