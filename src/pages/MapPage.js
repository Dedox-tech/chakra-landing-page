import React from "react";
import { Box } from "@chakra-ui/react";
import CustomMap from "../components/CustomMap";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function MapPage() {
    return (
        <Box>
            <NavBar />
            <CustomMap />
            <Footer />
        </Box>
    );
}
