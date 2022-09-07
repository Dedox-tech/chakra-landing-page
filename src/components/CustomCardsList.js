import React from "react";
import {
    Container,
    useBreakpointValue,
    Heading,
    SimpleGrid,
} from "@chakra-ui/react";
import CustomCard from "./CustomCard";

export default function CustomCardsList() {
    const customMaxWidth = useBreakpointValue({
        xl: "container.lg",
        lg: "4xl",
        md: "2xl",
    });

    return (
        <Container maxWidth={customMaxWidth} centerContent>
            <Heading mt="10">Stay informed with the latest news!</Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20" mt="10">
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <CustomCard />
            </SimpleGrid>
        </Container>
    );
}
