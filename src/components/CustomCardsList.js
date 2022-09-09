import React from "react";
import {
    Container,
    useBreakpointValue,
    Heading,
    SimpleGrid,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import CustomCard from "./CustomCard";
import newsData from "../utils/newsData";

export default function CustomCardsList() {
    const customMaxWidth = useBreakpointValue({
        xl: "container.lg",
        lg: "4xl",
        md: "2xl",
    });

    return (
        <Container maxWidth={customMaxWidth} centerContent mt="10" mb="5">
            <Heading>Stay informed with the latest news!</Heading>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="20" mt="10">
                {newsData.map((element) => {
                    const {
                        country,
                        heading,
                        description,
                        author,
                        date,
                        timeInMins,
                        image,
                        imageAlt,
                    } = element;
                    return (
                        <CustomCard
                            country={country}
                            heading={heading}
                            description={description}
                            author={author}
                            date={date}
                            timeInMins={timeInMins}
                            image={image}
                            imageAlt={imageAlt}
                            key={uuidv4()}
                        />
                    );
                })}
            </SimpleGrid>
        </Container>
    );
}
