import React from "react";
import { Box, Image, Stack, Text, Heading } from "@chakra-ui/react";
import Image1 from "../images/Image-1.jpg";

export default function CustomCard() {
    return (
        <Box maxW="350px" boxShadow="md">
            <Box h="220px">
                <Image src={Image1} alt="Covid-19 Image" layout="fill" />
            </Box>
            <Stack>
                <Text>Hello world!</Text>
                <Heading>I am a heading</Heading>
            </Stack>
        </Box>
    );
}
