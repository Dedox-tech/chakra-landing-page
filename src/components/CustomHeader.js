/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
    Container,
    Text,
    Heading,
    useBreakpointValue,
    useColorModeValue,
    Button,
    ButtonGroup,
    Image,
    chakra,
    Highlight,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import HeaderImageLight from "../images/Image-Header-Light.svg";
import HeaderImageDark from "../images/Image-Header-Dark.svg";

const CustomChakraBox = chakra(motion.div, {
    shouldForwardProp: (props) =>
        isValidMotionProp(props) || props === "children",
});

export default function CustomHeader() {
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

    const tealLightOrTealDarkColor = useColorModeValue("teal.500", "teal.200");
    const whiteOrGrayColor = useColorModeValue("white", "gray.800");

    return (
        <Container maxWidth={customMaxWidth} py={customPadding} centerContent>
            <Heading
                as="h1"
                fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                align="center"
            >
                <Highlight
                    query="Vaccinations"
                    styles={{
                        px: "2",
                        py: "0.5",
                        rounded: "full",
                        bg: tealLightOrTealDarkColor,
                        color: whiteOrGrayColor,
                    }}
                >
                    Track Coronavirus Vaccinations around the world
                </Highlight>
            </Heading>
            <Text mt={8} fontSize={{ base: "lg", md: "xl" }} align="center">
                Did you know that more than 5.29 billion people worldwide have
                received a dose of a Covid-19 vaccine? This is equal to about 70
                percent of the world population. It is a lot of people! Stay
                informed about the status of Covid-19 vaccination with our app.
            </Text>
            <ButtonGroup spacing={5} mt={10}>
                <Button colorScheme="teal" size="lg">
                    Get started
                </Button>
                <Button colorScheme="teal" size="lg" variant="outline">
                    Learn more
                </Button>
            </ButtonGroup>
            <CustomChakraBox
                mt={16}
                animate={{
                    scale: [0.9, 1],
                }}
            >
                <Image
                    src={useColorModeValue(HeaderImageLight, HeaderImageDark)}
                    alt="Header image of doctors and pills"
                />
            </CustomChakraBox>
        </Container>
    );
}
