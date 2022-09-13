import React from "react";
import {
    Box,
    Container,
    useBreakpointValue,
    useColorModeValue,
} from "@chakra-ui/react";
import CustomHeader from "../components/CustomHeader";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Faq from "../components/Faq";
import Features from "../components/Features";
import NewCustomMap from "../components/NewCustomMap";
import CustomCardsList from "../components/CustomCardsList";

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

    const tealLightOrTealDarkColor = useColorModeValue("teal.500", "teal.300");

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
            <Box bg={tealLightOrTealDarkColor}>
                <NewCustomMap />
            </Box>
            <Container maxWidth={customMaxWidth} py={customPadding}>
                <Features />
                <Faq />
                <CustomCardsList />
            </Container>
            <Footer />
        </Box>
    );
}
