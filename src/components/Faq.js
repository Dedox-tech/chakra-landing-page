import React from "react";
import {
    Heading,
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text,
    UnorderedList,
    ListItem,
    SimpleGrid,
    Image,
    chakra,
    useColorModeValue,
    Center,
} from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import HeaderImageLight from "../images/Image-Header-Light.svg";
import HeaderImageDark from "../images/Image-Header-Dark.svg";

const CustomChakraBox = chakra(motion.div, {
    shouldForwardProp: (props) =>
        isValidMotionProp(props) || props === "children",
});

export default function Faq() {
    return (
        <Box mt={20}>
            <Heading as="h2" mt={10}>
                Frequently asked questions
            </Heading>
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
                <Box>
                    <Accordion mt={10} defaultIndex={[2]}>
                        <AccordionItem>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    What are the side effects of COVID-19
                                    vaccines?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4} lineHeight>
                                <Text>
                                    Like with any vaccine, some people will
                                    experience mild to moderate side effects
                                    after being vaccinated against COVID-19.
                                    This is a normal sign that the body is
                                    developing protection. Side effects to
                                    COVID-19 vaccines include a fever,
                                    tiredness, headache, muscle ache, chills,
                                    diarrhoea and pain or redness at the
                                    injection site.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    What vaccines are there against COVID-19?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Text>
                                    As of 12 January 2022, the following
                                    vaccines have obtained EUL:
                                </Text>
                                <UnorderedList mt={4}>
                                    <ListItem>
                                        The Pfizer/BioNTech Comirnaty vaccine,
                                        31 December 2020.
                                    </ListItem>
                                    <ListItem>
                                        The SII/COVISHIELD and
                                        AstraZeneca/AZD1222 vaccines, 16
                                        February 2021.
                                    </ListItem>
                                    <ListItem>
                                        The Janssen/Ad26.COV 2.S vaccine
                                        developed by Johnson and Johnson, 12
                                        March 2021.
                                    </ListItem>
                                    <ListItem>
                                        The Moderna COVID-19 vaccine (mRNA
                                        1273), 30 April 2021.
                                    </ListItem>
                                    <ListItem>
                                        The Sinovac-CoronaVac vaccine, 1 June
                                        2021.
                                    </ListItem>
                                    <ListItem>
                                        The Covovax (NVX-CoV2373) vaccine, 17
                                        December 2021.
                                    </ListItem>
                                    <ListItem>
                                        The Nuvaxovid (NVX-CoV2373) vaccine, 20
                                        December 2021
                                    </ListItem>
                                </UnorderedList>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    What are the benefits of getting vaccinated?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Text>
                                    Getting vaccinated could save your life.
                                    COVID-19 vaccines provide strong protection
                                    against serious illness, hospitalization and
                                    death. There is also some evidence that
                                    being vaccinated will make it less likely
                                    that you will pass the virus on to others,
                                    which means your decision to get the vaccine
                                    also protects those around you.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    How quickly could COVID-19 vaccines stop the
                                    pandemic?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Text>
                                    COVID-19 vaccines are an important tool to
                                    stop the pandemic, but they will not do so
                                    on their own. Public health and social
                                    measures such as surveillance, contact
                                    tracing, isolation and individual protective
                                    behaviours such as staying at least 1 metre
                                    away from other people, wearing a properly
                                    fitted mask over your nose and mouth,
                                    avoiding poorly ventilated places and
                                    settings, staying home if unwell, covering
                                    coughs and sneezes and cleaning your hands
                                    frequently remain essential to breaking the
                                    chain of transmission.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton>
                                <Box flex="1" textAlign="left">
                                    Can I still get COVID-19 after I have been
                                    vaccinated?
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Text>
                                    Yes. The maximum level of protection from
                                    COVID-19 vaccines is not reached until
                                    several weeks after full vaccination. If you
                                    have a two-dose vaccine, this means that you
                                    don’t get full immunity until 2 – 4 weeks
                                    after the second dose. You can still become
                                    infected and ill during this time.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
                <Center>
                    <CustomChakraBox
                        animate={{
                            scale: [0.9, 1],
                        }}
                        p={10}
                    >
                        <Image
                            src={useColorModeValue(
                                HeaderImageLight,
                                HeaderImageDark
                            )}
                            alt="Header image of doctors and pills"
                        />
                    </CustomChakraBox>
                </Center>
            </SimpleGrid>
        </Box>
    );
}
