import React from "react";
import { Box } from "@chakra-ui/react";
import CustomHeader from "../components/CustomHeader";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Faq from "../components/Faq";

export default function MainPage() {
    return (
        <Box>
            <NavBar />
            <CustomHeader />
            <Faq />
            <Footer />
        </Box>
    );
}
