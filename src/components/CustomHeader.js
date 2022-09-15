/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
    Text,
    Heading,
    useColorModeValue,
    Button,
    ButtonGroup,
    Highlight,
} from "@chakra-ui/react";

export default function CustomHeader() {
    const tealLightOrTealDarkColor = useColorModeValue("teal.500", "teal.200");
    const whiteOrGrayColor = useColorModeValue("white", "gray.800");

    const handleClickGetStarted = () => {
        window.scrollTo({
            top: 500,
            left: 0,
            behavior: "smooth",
        });
    };

    const handleClickLearnMore = () => {
        window.scrollTo({
            top: 2500,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
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
            <ButtonGroup spacing={5} mt={10} align="center">
                <Button
                    colorScheme="teal"
                    size="lg"
                    onClick={handleClickGetStarted}
                >
                    Get started
                </Button>
                <Button
                    colorScheme="teal"
                    size="lg"
                    variant="outline"
                    onClick={handleClickLearnMore}
                >
                    Learn more
                </Button>
            </ButtonGroup>
        </>
    );
}
