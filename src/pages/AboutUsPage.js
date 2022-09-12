import React from "react";
import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AboutUsCard from "../components/AboutUsCard";

export default function MainPage() {
    return (
        <Box>
            <NavBar />
            <AboutUsCard />
            <Footer />
        </Box>
    );
}
