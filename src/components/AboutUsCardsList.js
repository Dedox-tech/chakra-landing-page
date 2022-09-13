import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import AboutUsCard from "./AboutUsCard";

export default function AboutUsCardsLists() {
    return (
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} my={10}>
            <AboutUsCard />
            <AboutUsCard />
            <AboutUsCard />
            <AboutUsCard />
        </SimpleGrid>
    );
}
