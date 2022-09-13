import React from "react";
import { Box, Container, useBreakpointValue } from "@chakra-ui/react";
import CustomHeader from "../components/CustomHeader";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import Features from "../components/Features";

export default function MainPage() {
    const customMaxWidth = useBreakpointValue({
        xl: "container.lg",
        lg: "4xl",
        md: "2xl",
    });

    const customPadding = useBreakpointValue({
        xl: 24,
        lg: 20,
        md: 12,
        base: 6,
    });

    return (
        <Box>
            <NavBar />
            <Container
                maxWidth={customMaxWidth}
                py={customPadding}
                centerContent
            >
                <CustomHeader />
            </Container>
            <Container maxWidth={customMaxWidth} py={customPadding}>
                <Features />
                <Faq />
            </Container>
            <Footer />
        </Box>
    );
}
