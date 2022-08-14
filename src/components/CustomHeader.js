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
    Box,
} from "@chakra-ui/react";
import HeaderImageLight from "../images/Image-Header-Light.svg";
import HeaderImageDark from "../images/Image-Header-Dark.svg";

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

    return (
        <Container maxWidth={customMaxWidth} py={customPadding} centerContent>
            <Heading
                as="h1"
                fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                align="center"
            >
                Track Coronavirus
                <Text
                    as="span"
                    color={useColorModeValue("teal.500", "teal.200")}
                >
                    {" "}
                    Vaccinations{" "}
                </Text>
                around the world
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
            <Box mt={16}>
                <Image
                    src={useColorModeValue(HeaderImageLight, HeaderImageDark)}
                    alt="Header image of doctors and pills"
                />
            </Box>
        </Container>
    );
}
