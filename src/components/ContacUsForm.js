import React from "react";
import {
    Box,
    FormControl,
    Input,
    Textarea,
    SimpleGrid,
    Image,
    Center,
    Button,
    useColorModeValue,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import ContactUsImageLight from "../images/Image-ContactUs-Light.svg";
import ContactUsImageDark from "../images/Image-ContactUs-Dark.svg";

export default function ContactUsForm() {
    return (
        <SimpleGrid mt={10} mb={0} columns={{ base: 1, lg: 2 }} spacing={10}>
            <Center p={10}>
                <Image
                    src={useColorModeValue(
                        ContactUsImageLight,
                        ContactUsImageDark
                    )}
                    alt="Contact us ilustration about a phone app"
                />
            </Center>
            <Box>
                <FormControl>
                    <Input
                        type="Text"
                        size="lg"
                        placeholder="Full name"
                        variant="filled"
                    />
                </FormControl>
                <FormControl mt={5}>
                    <Input
                        type="email"
                        size="lg"
                        placeholder="Email address (@)"
                        variant="filled"
                    />
                </FormControl>
                <FormControl mt={5}>
                    <Textarea
                        placeholder="Write your message..."
                        height="200px"
                        size="lg"
                        variant="filled"
                    />
                </FormControl>
                <Button colorScheme="teal" mt={10} leftIcon={<EmailIcon />}>
                    Send
                </Button>
            </Box>
        </SimpleGrid>
    );
}
