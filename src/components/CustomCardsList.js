import React from "react";
import {
    Container,
    useBreakpointValue,
    Heading,
    SimpleGrid,
} from "@chakra-ui/react";
import CustomCard from "./CustomCard";
import newsData from "../utils/newsData";

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
                        />
                    );
                })}
            </SimpleGrid>
        </Container>
    );
}
