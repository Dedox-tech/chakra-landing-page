import {
    SimpleGrid,
    Box,
    useColorModeValue,
    Heading,
    Text,
    Circle,
    Highlight,
} from "@chakra-ui/react";
import {
    CalendarIcon,
    MoonIcon,
    ChatIcon,
    TimeIcon,
    CheckIcon,
} from "@chakra-ui/icons";
import React from "react";

export default function Features() {
    const lightOrUltraDark = useColorModeValue("gray.200", "gray.900");
    const whiteOrGrayColor = useColorModeValue("white", "gray.800");
    const tealLightOrTealDarkColor = useColorModeValue("teal.500", "teal.200");
    const pinkLightOrDarkColor = useColorModeValue("#D4ADCF", "#C28ABA");

    return (
        <Box>
            <Heading as="h2">
                <Highlight
                    query="Learn more"
                    styles={{
                        px: "1.5",
                        py: "0.5",
                        bg: tealLightOrTealDarkColor,
                        color: whiteOrGrayColor,
                    }}
                >
                    Learn more about our features
                </Highlight>
            </Heading>
            <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={10} mt={10}>
                <Box
                    boxShadow="md"
                    borderRadius="sm"
                    borderWidth="1px"
                    borderColor={lightOrUltraDark}
                    p={5}
                >
                    <Circle
                        w="48px"
                        h="48px"
                        bg={pinkLightOrDarkColor}
                        color={whiteOrGrayColor}
                    >
                        <CalendarIcon />
                    </Circle>
                    <Heading size="md" as="h6" mt={2}>
                        Data visualization
                    </Heading>
                    <Text mt={2}>
                        Data is the core of our product. We present it to the
                        users in an easily digestible way for quick and agile
                        decision-making.
                    </Text>
                </Box>
                <Box
                    boxShadow="md"
                    borderRadius="sm"
                    borderWidth="1px"
                    borderColor={lightOrUltraDark}
                    p={5}
                >
                    <Circle
                        w="48px"
                        h="48px"
                        bg={pinkLightOrDarkColor}
                        color={whiteOrGrayColor}
                    >
                        <ChatIcon />
                    </Circle>
                    <Heading size="md" as="h6" mt={2}>
                        Latest news
                    </Heading>
                    <Text mt={2}>
                        A list of custom curated news about coronavirus. Fetched
                        from exclusive data sources and journals. But don&apos;t
                        worry boy, the app is free.
                    </Text>
                </Box>
                <Box
                    boxShadow="md"
                    borderRadius="sm"
                    borderWidth="1px"
                    borderColor={lightOrUltraDark}
                    p={5}
                >
                    <Circle
                        w="48px"
                        h="48px"
                        bg={pinkLightOrDarkColor}
                        color={whiteOrGrayColor}
                    >
                        <CalendarIcon />
                    </Circle>
                    <Heading size="md" as="h6" mt={2}>
                        An interactive map
                    </Heading>
                    <Text mt={2}>
                        The world map is at your feet! You can hover over each
                        country to see the number of doses of covid-19
                        vacciness.
                    </Text>
                </Box>
                <Box
                    boxShadow="md"
                    borderRadius="sm"
                    borderWidth="1px"
                    borderColor={lightOrUltraDark}
                    p={5}
                >
                    <Circle
                        w="48px"
                        h="48px"
                        bg={pinkLightOrDarkColor}
                        color={whiteOrGrayColor}
                    >
                        <TimeIcon />
                    </Circle>
                    <Heading size="md" as="h6" mt={2}>
                        Up to date information
                    </Heading>
                    <Text mt={2}>
                        The team is constantly monitoring the status of the
                        coronavirus pandemic. Expect updates in our datasets two
                        times per week.
                    </Text>
                </Box>
                <Box
                    boxShadow="md"
                    borderRadius="sm"
                    borderWidth="1px"
                    borderColor={lightOrUltraDark}
                    p={5}
                >
                    <Circle
                        w="48px"
                        h="48px"
                        bg={pinkLightOrDarkColor}
                        color={whiteOrGrayColor}
                    >
                        <MoonIcon />
                    </Circle>
                    <Heading size="md" as="h6" mt={2}>
                        Dark mode
                    </Heading>
                    <Text mt={2}>
                        Say goodbye to your eye pain! Just go straight to the
                        moon icon and turn on the fabolous dark mode. We know
                        too... It&apos;s amazing!
                    </Text>
                </Box>
                <Box
                    boxShadow="md"
                    borderRadius="sm"
                    borderWidth="1px"
                    borderColor={lightOrUltraDark}
                    p={5}
                >
                    <Circle
                        w="48px"
                        h="48px"
                        bg={pinkLightOrDarkColor}
                        color={whiteOrGrayColor}
                    >
                        <CheckIcon />
                    </Circle>
                    <Heading size="md" as="h6" mt={2}>
                        Responsive design
                    </Heading>
                    <Text mt={2}>
                        Whether you have a smartphone or a tablet, we got you
                        covered! This landing page was built following
                        responsive design principles.
                    </Text>
                </Box>
            </SimpleGrid>
        </Box>
    );
}
