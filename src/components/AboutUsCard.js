import React from "react";
import {
    Box,
    Text,
    Avatar,
    Heading,
    useColorModeValue,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function AboutUsCard({
    name,
    age,
    citizenship,
    description,
    image,
}) {
    const lightOrUltraDark = useColorModeValue("gray.200", "gray.900");

    return (
        <Box
            borderWidth="1px"
            p={5}
            boxShadow="md"
            borderRadius="sm"
            borderColor={lightOrUltraDark}
        >
            <Avatar src={image} size="2xl" borderWidth="1px" />
            <Box mt={2}>
                <Heading as="h6" size="md">
                    {name}
                </Heading>
                <Text color="gray.500">
                    {`${age} years old · ${citizenship}`}
                </Text>
            </Box>
            <Text mt={2}>{description}</Text>
        </Box>
    );
}

AboutUsCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    citizenship: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};
