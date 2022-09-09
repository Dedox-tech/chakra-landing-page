import React from "react";
import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CustomCardsList from "../components/CustomCardsList";

export default function NewsPage() {
    return (
        <Box>
            <NavBar />
            <CustomCardsList />
            <Footer />
        </Box>
    );
}
