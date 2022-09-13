import React from "react";
import { Box, Text, Avatar, Heading } from "@chakra-ui/react";
import Diego from "../images/Diego-Murillo.png";

export default function AboutUsCard() {
    return (
        <Box borderWidth="1px" p={5} boxShadow="md" borderRadius="sm">
            <Avatar src={Diego} size="2xl" borderWidth="1px" />
            <Box mt={2}>
                <Heading as="h6" size="md">
                    Diego Murillo Ferrer
                </Heading>
                <Text color="gray.500">23 years old &bull; Colombian</Text>
            </Box>
            <Text mt={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent malesuada finibus nunc, ut laoreet mauris lacinia id.
                Nam sit amet nibh eu dolor placerat placerat.
            </Text>
        </Box>
    );
}
