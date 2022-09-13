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
import ContactUsForm from "../components/ContacUsForm";

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
    // const grayOrWhiteColor = useColorModeValue("gray.800", "white");

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
                            bg: tealLightOrTealDarkColor,
                            color: whiteOrGrayColor,
                        }}
                    >
                        Get to know our wonderful team
                    </Highlight>
                </Heading>
                <AboutUsCardsLists />
                <Heading mt={20}>
                    <Highlight
                        query="get in touch"
                        styles={{
                            px: "1.5",
                            py: "0.5",
                            bg: tealLightOrTealDarkColor,
                            color: whiteOrGrayColor,
                        }}
                    >
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Let's get in touch. Send us a message
                    </Highlight>
                    <ContactUsForm />
                </Heading>
            </Container>
            <Footer />
        </Box>
    );
}
