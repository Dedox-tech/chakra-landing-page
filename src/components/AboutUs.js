import React from "react";
import {Box, Heading, Text, Container, useBreakpointValue, Input, Button} from "@chakra-ui/react";

export default function AboutUs(){

    const customMaxWidth = useBreakpointValue({
        xl: "container.lg",
        lg: "4xl",
        md: "2xl"
    });

    return (
        <Box>
            <Container maxWidth={customMaxWidth} mb = {4}>
                <Heading as="h2" align = "center" mb = {5}>
                    About Us
                </Heading>
                <Text mb = {5} fontSize = "2xl" align = "center">
                    This is a example text!
                </Text>
                <Input
                    placeholder= "Soy un input"
                    size= "lg"
                    variant= "outline"
                    mb = {6}
                />
                 <Input
                    placeholder= "Soy un segundo input"
                    size= "lg"
                    variant= "outline"
                    mb = {6}
                />
                <Button
                    colorScheme = "teal"
                    size = "lg"
                    variant = "solid"
                    mt = {2}
                >
                    Soy un botón!
                </Button>
            </Container>
        </Box>
    );
}