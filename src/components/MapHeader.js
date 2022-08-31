import React from "react";
import { Container, Heading, useBreakpointValue } from "@chakra-ui/react";

export default function MapHeader() {
    const customMaxWidth = useBreakpointValue({
        xl: "container.lg",
        lg: "4xl",
        md: "2xl",
    });

    return (
        <Container maxWidth={customMaxWidth} centerContent mt={10} mb={10}>
            <Heading>Meet our beautiful map!</Heading>
        </Container>
    );
}
