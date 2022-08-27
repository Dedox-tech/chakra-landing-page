import React from "react";
import { Box } from "@chakra-ui/react";
import CustomHeader from "../components/CustomHeader";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

export default function MainPage() {
    return (
        <Box>
            <NavBar />
            <CustomHeader />
            <AboutUs/>
            <Footer />
        </Box>
    );
}
