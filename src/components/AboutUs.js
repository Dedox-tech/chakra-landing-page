import React from "react";
import {Box, Heading, Container, useBreakpointValue, Image, SimpleGrid} from "@chakra-ui/react";
import Diego from "../images/Diego.jpeg";
import jose from "../images/jose.jpeg";
import bryan from "../images/bryan.jpg";
import carolina from "../images/carolina.jpeg";

export default function AboutUs(){

    const customMaxWidth = useBreakpointValue({
        xl: "container.lg",
        lg: "6xl",
        md: "2xl",
    });

    const customPadding = useBreakpointValue({
        xl: 24,
        lg: 10,
        md: 12,
        base: 6,
    });

    return (
        <Box>
            <Container maxWidth={customMaxWidth} py={customPadding} centerContent>
                <Heading as="h1"
                fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                align="center">
                    About Us
                </Heading>

                <SimpleGrid columns={{base: 1, lg: 4}} spacing='10px' mt={8}>
                    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Image src = {Diego}/>
                    
                        <Box p='6'>
                            <Box display='flex' alignItems='baseline'>
                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                                23 years old &bull; colombian
                            </Box>
                            </Box>

                            <Box
                                mt='1'
                                fontWeight='semibold'
                                as='h1'
                                lineHeight='tight'
                                noOfLines={2}
                            >
                                Diego Fernando Murillo Ferrer
                            </Box>

                            <Box>
                                Front-End Developer
                            </Box>

                        </Box>
                    </Box>

                    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Image src={jose} />

                        <Box p='6'>
                            <Box display='flex' alignItems='baseline'>
                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                                37 years old &bull; bolivian
                            </Box>
                            </Box>

                            <Box
                                mt='1'
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                noOfLines={1}
                            >
                                Jose Miguel Lanza
                            </Box>

                            <Box>
                                Software Engineer
                            </Box>

                        </Box>
                    </Box>

                    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Image src={bryan} />

                        <Box p='6'>
                            <Box display='flex' alignItems='baseline'>
                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                                24 years old &bull; colombian
                            </Box>
                            </Box>

                            <Box
                                mt='1'
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                noOfLines={2}
                            >
                                Bryan Escobar Restrepo
                            </Box>

                            <Box>
                                Data Engineer
                            </Box>

                        </Box>
                    </Box>


                    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                        <Image src={carolina} />

                        <Box p='6'>
                            <Box display='flex' alignItems='baseline'>
                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                                36 years old &bull; colombian
                            </Box>
                            </Box>

                            <Box
                                mt='1'
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                noOfLines={2}
                            >
                                Maria Carolina Parra
                            </Box>

                            <Box>
                                Business Manager
                            </Box>

                        </Box>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    );
}