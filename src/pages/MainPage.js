import React from "react";
import { Box } from "@chakra-ui/react";
import CustomHeader from "../components/CustomHeader";
import NavBar from "../components/NavBar";

export default function MainPage() {
    return (
        <Box>
            <NavBar />
            <CustomHeader />
        </Box>
    );
}
