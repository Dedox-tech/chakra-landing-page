import React from "react";
import {
    Box,
    Heading,
    SimpleGrid,
    useColorModeValue,
    Highlight,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import CustomCard from "./CustomCard";
import newsData from "../utils/newsData";

export default function CustomCardsList() {
    const tealLightOrTealDarkColor = useColorModeValue("teal.500", "teal.200");
    const whiteOrGrayColor = useColorModeValue("white", "gray.800");

    return (
        <Box mt="20">
            <Heading>
                <Highlight
                    query="informed"
                    styles={{
                        px: "1.5",
                        py: "0.5",
                        bg: tealLightOrTealDarkColor,
                        color: whiteOrGrayColor,
                    }}
                >
                    Stay informed with our news
                </Highlight>
            </Heading>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="10" mt="10">
                {newsData.map((element) => {
                    const {
                        country,
                        heading,
                        description,
                        author,
                        date,
                        timeInMins,
                        id,
                    } = element;
                    return (
                        <CustomCard
                            country={country}
                            heading={heading}
                            description={description}
                            author={author}
                            date={date}
                            timeInMins={timeInMins}
                            id={id}
                            key={uuidv4()}
                        />
                    );
                })}
            </SimpleGrid>
        </Box>
    );
}
