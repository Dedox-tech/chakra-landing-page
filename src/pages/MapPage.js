import React from "react";
import { Box } from "@chakra-ui/react";
import NewCustomMap from "../components/NewCustomMap";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function MapPage() {
    return (
        <Box>
            <NavBar />
            <NewCustomMap />
            <Footer />
        </Box>
    );
}
