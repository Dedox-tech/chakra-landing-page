import React from "react";
import { Box } from "@chakra-ui/react";
import NewCustomMap from "../components/NewCustomMap";
import MapHeader from "../components/MapHeader";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function MapPage() {
    return (
        <Box>
            <NavBar />
            <MapHeader />
            <NewCustomMap />
            <Footer />
        </Box>
    );
}
