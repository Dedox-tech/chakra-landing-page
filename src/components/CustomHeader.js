import React from "react";
import {
    Container,
    Text,
    Heading,
    useBreakpointValue,
    Button,
    ButtonGroup,
} from "@chakra-ui/react";

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
        <Container maxWidth={customMaxWidth} py={customPadding}>
            <Heading as="h1">Hello World! I am a heading.</Heading>
            <Text my={5}>
                What do you think about the Chakra UI components?
            </Text>
            <Text mb={5} mt={2}>
                This is our starting Landing Page. We are going to do something
                great!
            </Text>
            <ButtonGroup spacing={5} my={5}>
                <Button colorScheme="teal" size="lg">
                    Get started
                </Button>
                <Button colorScheme="teal" size="lg" variant="outline">
                    Learn more
                </Button>
            </ButtonGroup>
        </Container>
    );
}
