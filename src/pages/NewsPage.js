import React from "react";
import {
    Box,
    Container,
    useBreakpointValue,
    Heading,
    Text,
    Stack,
    Avatar,
    Image,
    Button,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import newsData from "../utils/newsData";

export default function NewsPage() {
    const customMaxWidthLg = useBreakpointValue({
        xl: "container.lg",
        lg: "4xl",
        md: "2xl",
    });

    const customMaxWidthSm = useBreakpointValue({
        lg: "3xl",
        md: "2xl",
    });

    const customPadding = useBreakpointValue({
        lg: 16,
        md: 12,
        base: 6,
    });

    const { newsId } = useParams();
    const requiredNew = newsData.filter((element) => element.id === newsId);
    const finalRequiredNew = requiredNew[0];
    const {
        heading,
        description,
        author,
        date,
        timeInMins,
        arrayOfParagraphs1,
        arrayOfParagraphs2,
        image,
        imageAlt,
        background,
    } = finalRequiredNew;

    return (
        <Box>
            <NavBar />
            <Container maxWidth={customMaxWidthLg} py={customPadding}>
                <Heading>{heading}</Heading>
                <Text fontSize={{ base: "lg", md: "xl" }} mt={5}>
                    {description}
                </Text>
                <Stack mt="7" direction="row" spacing="5">
                    <Avatar name={author} size="md" />
                    <Stack direction="column" fontSize="sm" spacing="0">
                        <Text fontWeight="600">{author}</Text>
                        <Text>{`${date} · ${timeInMins} min read`}</Text>
                    </Stack>
                </Stack>
            </Container>
            <Box h="500px" backgroundImage={background} />
            <Container maxWidth={customMaxWidthSm} py={customPadding}>
                <Heading mb={5}>Overview</Heading>
                {arrayOfParagraphs1.map((element) => (
                    <Text
                        key={uuidv4()}
                        fontSize={{ base: "lg", md: "xl" }}
                        mb={5}
                    >
                        {element}
                    </Text>
                ))}

                <Image src={image} p={{ base: 5, md: 10 }} alt={imageAlt} />
                {arrayOfParagraphs2.map((element) => (
                    <Text
                        key={uuidv4()}
                        fontSize={{ base: "lg", md: "xl" }}
                        mb={5}
                    >
                        {element}
                    </Text>
                ))}
                <Button
                    colorScheme="teal"
                    w="100%"
                    size="lg"
                    mt={5}
                    as="a"
                    href="/"
                >
                    Back to home
                </Button>
            </Container>
            <Footer />
        </Box>
    );
}
