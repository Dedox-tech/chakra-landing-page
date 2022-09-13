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
import PropTypes from "prop-types";

function CustomCard({
    country,
    heading,
    description,
    author,
    date,
    timeInMins,
    image,
    imageAlt,
}) {
    const tealLightOrTealDarkColor = useColorModeValue("teal.500", "teal.200");
    const lightOrUltraDark = useColorModeValue("gray.200", "gray.900");

    return (
        <Box
            maxW="410px"
            boxShadow="md"
            overflow="hidden"
            borderRadius="sm"
            borderWidth="1px"
            borderColor={lightOrUltraDark}
        >
            <Image src={image} alt={imageAlt} objectFit="fill" />
            <Box p={6}>
                <Stack>
                    <Text
                        color={tealLightOrTealDarkColor}
                        fontWeight="700"
                        textTransform="uppercase"
                        fontSize="sm"
                        letterSpacing="1.1"
                    >
                        {country}
                    </Text>
                    <Heading fontFamily="body" fontSize="2xl">
                        {heading}
                    </Heading>
                    <Text mt="4">{description}</Text>
                </Stack>
                <Stack mt="5" direction="row" spacing="4">
                    <Avatar name={author} size="md" />
                    <Stack direction="column" fontSize="sm" spacing="0">
                        <Text fontWeight="600">{author}</Text>
                        <Text>{`${date} · ${timeInMins} min read`}</Text>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    );
}

CustomCard.propTypes = {
    country: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    timeInMins: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
};

export default CustomCard;
