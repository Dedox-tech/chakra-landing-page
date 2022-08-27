import React from "react";
import { Box, Heading, Text , Container, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function ContactUs() {

    const customMaxWidth = useBreakpointValue({
        xl: "container.lg",
        lg: "4xl",
        md: "2xl",
    });

    return (
        <Box>
            <NavBar />
            <Container maxWidth={customMaxWidth}  centerContent> 
            <Heading as="h1" align="center">Contact Us</Heading>
                <Text>Esta es una prueba</Text>
            <Footer />
            </Container>

        </Box>
    );
}
