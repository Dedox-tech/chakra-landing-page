import React from "react";
import {
    Box,
    Text,
    Avatar,
    Heading,
    useColorModeValue,
    Link,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function AboutUsCard({
    name,
    age,
    citizenship,
    description,
    image,
    linkedin,
}) {
    const lightOrUltraDark = useColorModeValue("gray.200", "gray.900");
    const tealLightOrTealDarkColor = useColorModeValue("teal.500", "teal.200");

    return (
        <Box
            borderWidth="1px"
            p={5}
            boxShadow="md"
            borderRadius="sm"
            borderColor={lightOrUltraDark}
            _hover={{
                borderColor: tealLightOrTealDarkColor,
                borderWidth: "1px",
            }}
        >
            <Link href={linkedin} target="_blank">
                <Avatar src={image} size="2xl" borderWidth="1px" />
            </Link>
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
    linkedin: PropTypes.string.isRequired,
};
