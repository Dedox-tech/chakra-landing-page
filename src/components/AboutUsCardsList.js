import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import AboutUsCard from "./AboutUsCard";
import teamData from "../utils/teamData";

export default function AboutUsCardsLists() {
    return (
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} my={10}>
            {teamData.map((element) => {
                const { name, age, citizenship, description, image, linkedin } =
                    element;
                return (
                    <AboutUsCard
                        name={name}
                        age={age}
                        citizenship={citizenship}
                        description={description}
                        image={image}
                        linkedin={linkedin}
                        key={uuidv4()}
                    />
                );
            })}
        </SimpleGrid>
    );
}
