import React from "react";
import {
    Box,
    Image,
    Stack,
    Text,
    Heading,
    useColorModeValue,
    Avatar,
} from "@chakra-ui/react";
import Image1 from "../images/Image-1.jpg";

export default function CustomCard() {
    const tealLightOrTealDarkColor = useColorModeValue("teal.500", "teal.200");

    return (
        <Box maxW="400px" boxShadow="md" p={6}>
            <Box h="220px" mx="-6">
                <Image src={Image1} alt="Covid-19 Image" layout="fill" />
            </Box>
            <Stack mt="5">
                <Text
                    color={tealLightOrTealDarkColor}
                    fontWeight="700"
                    textTransform="uppercase"
                    fontSize="sm"
                    letterSpacing="1.1"
                >
                    Colombia
                </Text>
                <Heading fontFamily="body" fontSize="2xl">
                    New omicron boosters are now available at U.S.
                </Heading>
                <Text mt="4">
                    The U.S. authorized the first major makeover of the Covid-19
                    vaccines this week in an effort to stem an expected tide of
                    infections and hospitalizations this fall.
                </Text>
            </Stack>
            <Stack mt="5" direction="row" spacing="4">
                <Avatar name="Diego" size="md" />
                <Stack direction="column" fontSize="sm" spacing="0">
                    <Text fontWeight="600">Diego Murillo</Text>
                    <Text>Sep, 06, 2021 · 5 min read</Text>
                </Stack>
            </Stack>
        </Box>
    );
}
