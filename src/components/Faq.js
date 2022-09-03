import React from "react";
import {
    Container,
    useBreakpointValue,
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
} from "@chakra-ui/react";

export default function Faq() {
    const customMaxWidth = useBreakpointValue({
        xl: "container.lg",
        lg: "4xl",
        md: "2xl",
    });

    const customPadding = useBreakpointValue({
        xl: 24,
        lg: 20,
        md: 12,
        base: 6,
    });

    return (
        <Container maxWidth={customMaxWidth} py={customPadding}>
            <Heading as="h2">Frequently asked questions</Heading>
            <Accordion mt={10} allowToggle>
                <AccordionItem>
                    <AccordionButton>
                        <Box flex="1" textAlign="left">
                            What are the side effects of COVID-19 vaccines?
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4} lineHeight>
                        <Text>
                            Like with any vaccine, some people will experience
                            mild to moderate side effects after being vaccinated
                            against COVID-19. This is a normal sign that the
                            body is developing protection. Side effects to
                            COVID-19 vaccines include a fever, tiredness,
                            headache, muscle ache, chills, diarrhoea and pain or
                            redness at the injection site.
                        </Text>
                        <Text mt={4}>
                            Not everyone will experience side effects. Most side
                            effects go away within a few days on their own. You
                            can manage any side effects with rest, plenty of
                            non-alcoholic liquids and taking medication to
                            manage pain and fever, if needed.
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
                            There are several COVID-19 vaccines validated for
                            use by WHO (given Emergency Use Listing). The first
                            mass vaccination programme started in early December
                            2020 and the number of vaccination doses
                            administered is updated on a daily basis on the
                            COVID-19 dashboard.
                        </Text>
                        <Text mt={4}>
                            As of 12 January 2022, the following vaccines have
                            obtained EUL:
                        </Text>
                        <UnorderedList mt={4}>
                            <ListItem>
                                The Pfizer/BioNTech Comirnaty vaccine, 31
                                December 2020.
                            </ListItem>
                            <ListItem>
                                The SII/COVISHIELD and AstraZeneca/AZD1222
                                vaccines, 16 February 2021.
                            </ListItem>
                            <ListItem>
                                The Janssen/Ad26.COV 2.S vaccine developed by
                                Johnson and Johnson, 12 March 2021.
                            </ListItem>
                            <ListItem>
                                The Moderna COVID-19 vaccine (mRNA 1273), 30
                                April 2021.
                            </ListItem>
                            <ListItem>
                                The Sinovac-CoronaVac vaccine, 1 June 2021.
                            </ListItem>
                            <ListItem>
                                The Covovax (NVX-CoV2373) vaccine, 17 December
                                2021.
                            </ListItem>
                            <ListItem>
                                The Nuvaxovid (NVX-CoV2373) vaccine, 20 December
                                2021
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
                            Getting vaccinated could save your life. COVID-19
                            vaccines provide strong protection against serious
                            illness, hospitalization and death. There is also
                            some evidence that being vaccinated will make it
                            less likely that you will pass the virus on to
                            others, which means your decision to get the vaccine
                            also protects those around you.
                        </Text>
                        <Text mt={4}>
                            Even after getting vaccinated, keep taking
                            precautions to protect yourself, family, friends and
                            anyone else you may come into contact with. COVID-19
                            vaccines are highly effective, but some people will
                            still get ill from COVID-19 after vaccination. There
                            is also still a chance that you could also pass the
                            virus on to others who are not vaccinated. Stay at
                            least 1 metre away from other people, wear a
                            properly fitted mask over your nose and mouth when
                            you can’t keep this distance, avoid poorly
                            ventilated places and settings, clean your hands
                            frequently, stay home if unwell and get tested, and
                            stay informed about how much virus is circulating in
                            the areas where you travel, live and work.
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
                            COVID-19 vaccines are an important tool to stop the
                            pandemic, but they will not do so on their own.
                            Public health and social measures such as
                            surveillance, contact tracing, isolation and
                            individual protective behaviours such as staying at
                            least 1 metre away from other people, wearing a
                            properly fitted mask over your nose and mouth,
                            avoiding poorly ventilated places and settings,
                            staying home if unwell, covering coughs and sneezes
                            and cleaning your hands frequently remain essential
                            to breaking the chain of transmission.
                        </Text>
                        <Text mt={4}>
                            The impact of COVID-19 vaccines on the pandemic will
                            depend on several factors. These include the
                            effectiveness of the vaccines; how quickly they are
                            approved, manufactured, and delivered; the possible
                            development of other variants, and how many people
                            get vaccinated.
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
                            Yes. The maximum level of protection from COVID-19
                            vaccines is not reached until several weeks after
                            full vaccination. If you have a two-dose vaccine,
                            this means that you don’t get full immunity until 2
                            – 4 weeks after the second dose. You can still
                            become infected and ill during this time.
                        </Text>
                        <Text mt={4}>
                            While COVID-19 vaccines are highly effective against
                            serious illness, hospitalisation and death, no
                            vaccine is 100% effective. As a result, a number of
                            vaccinated people will get infected and may fall ill
                            with COVID-19 in spite of being fully vaccinated.
                            This is known as a ‘breakthrough infection’ or
                            ‘breakthrough case’. With more infectious virus
                            variants such as Delta, we are seeing more
                            breakthrough infections and cases.
                        </Text>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Container>
    );
}
