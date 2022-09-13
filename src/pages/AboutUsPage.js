import React from "react";
import {
    Container,
    useBreakpointValue,
    Box,
    Heading,
    Highlight,
    useColorModeValue,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AboutUsCardsLists from "../components/AboutUsCardsList";

export default function MainPage() {
    const customMaxWidth = useBreakpointValue({
        xl: "container.lg",
        lg: "4xl",
        md: "2xl",
    });

    const customPadding = useBreakpointValue({
        lg: 16,
        md: 12,
        base: 6,
    });

    const tealLightOrTealDarkColor = useColorModeValue("teal.500", "teal.200");
    const whiteOrGrayColor = useColorModeValue("white", "gray.800");

    return (
        <Box>
            <NavBar />
            <Container maxWidth={customMaxWidth} py={customPadding}>
                <Heading>
                    <Highlight
                        query="wonderful"
                        styles={{
                            px: "1.5",
                            py: "0.5",
                            rounded: "full",
                            bg: tealLightOrTealDarkColor,
                            color: whiteOrGrayColor,
                        }}
                    >
                        Get to know our wonderful team
                    </Highlight>
                </Heading>
                <AboutUsCardsLists />
            </Container>
            <Footer />
        </Box>
    );
}
