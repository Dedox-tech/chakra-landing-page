import React from "react";
import {Box} from "@chakra-ui/react";
import CustomCard from "../components/CustomCard";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function NewsPage () {
    return (
        <Box>
            <NavBar/>
            <CustomCard />
            <Footer />
        </Box>
    );
}