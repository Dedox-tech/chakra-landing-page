import React from "react";
import { Box } from "@chakra-ui/react";
import CustomHeader from "../components/CustomHeader";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function MainPage() {
    return (
        <Box>
            <NavBar />
            <CustomHeader />
            <Footer />
        </Box>
    );
}
