import React from "react";
import { Box, Container, useBreakpointValue, Text } from "@chakra-ui/react";
import CustomMap from "./CustomMap";

export default function MainContent() {
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
            <Box pb={customPadding}>
                <Text as="h2">Features</Text>
            </Box>
            <Box pb={customPadding}>
                <Text as="h2">FAQ</Text>
            </Box>
            <Box pb={customPadding}>
                <CustomMap />
            </Box>
        </Container>
    );
}
