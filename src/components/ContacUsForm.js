/* eslint-disable no-console */
import React, { useState } from "react";
import {
    Box,
    FormControl,
    Input,
    Textarea,
    FormErrorMessage,
    SimpleGrid,
    Image,
    Center,
    Button,
    useColorModeValue,
    CircularProgress,
    Alert,
    AlertIcon,
    AlertDescription,
    CloseButton,
    Text,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import ContactUsImageLight from "../images/Image-ContactUs-Light.svg";
import ContactUsImageDark from "../images/Image-ContactUs-Dark.svg";
import validateEmailForm from "../utils/validateEmailForm";
import validateStringForm from "../utils/validateStringForm";

export default function ContactUsForm() {
    const [fullName, setFullName] = useState("Noah Smith");
    const [email, setEmail] = useState("hello@example.com");
    const [message, setMessage] = useState("Write your message here...");

    const isErrorFullName = !validateStringForm(fullName);
    const isErrorEmail = !validateEmailForm(email);
    const isErrorMessage = !validateStringForm(message);

    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(null);
    const [isFailure, setIsFailure] = useState(null);

    const tealLightOrTealDarkColor = useColorModeValue("teal.500", "teal.200");

    const setFullNameValue = (event) => {
        setFullName(event.target.value);
    };

    const setEmailValue = (event) => {
        setEmail(event.target.value);
    };

    const setMessageValue = (event) => {
        setMessage(event.target.value);
    };

    const handleCloseAlertSuccess = () => {
        setIsSuccess(null);
    };

    const handleCloseAlertFailure = () => {
        setIsFailure(null);
    };

    const handleSubmitForm = async () => {
        console.log(fullName);
        console.log(email);
        console.log(message);
        setIsLoading(true);
        try {
            const response = await fetch(
                "https://public.herotofu.com/v1/5519e6c0-1d0b-11ed-9730-af3c511c5e41",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        fullName,
                        email,
                        message,
                    }),
                }
            );

            if (response.status === 422) {
                throw new Error("Are you a robot?");
            }

            if (response.status !== 200) {
                throw new Error("Oops! An unexpected error had ocurred");
            }

            const data = await response.json();

            if (data) {
                setIsLoading(false);
                setIsSuccess(true);
                setIsFailure(false);
            }
        } catch (error) {
            setIsLoading(false);
            setIsSuccess(false);
            setIsFailure(true);
        }
    };

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
                <FormControl isInvalid={isErrorFullName}>
                    <Input
                        type="Text"
                        size="lg"
                        placeholder="Full name"
                        variant="filled"
                        onChange={setFullNameValue}
                        value={fullName}
                    />
                    {isErrorFullName ? (
                        <FormErrorMessage fontWeight="light">
                            Please enter a valid name
                        </FormErrorMessage>
                    ) : null}
                </FormControl>
                <FormControl mt={5} isInvalid={isErrorEmail}>
                    <Input
                        type="email"
                        size="lg"
                        placeholder="Email address (@)"
                        variant="filled"
                        onChange={setEmailValue}
                        value={email}
                    />
                    {isErrorEmail ? (
                        <FormErrorMessage fontWeight="light">
                            Please enter a valid email address
                        </FormErrorMessage>
                    ) : null}
                </FormControl>
                <FormControl mt={5} isInvalid={isErrorMessage}>
                    <Textarea
                        placeholder="Write your message..."
                        height="200px"
                        size="lg"
                        variant="filled"
                        onChange={setMessageValue}
                        value={message}
                    />
                    {isErrorMessage ? (
                        <FormErrorMessage fontWeight="light">
                            Please enter a valid message
                        </FormErrorMessage>
                    ) : null}
                </FormControl>
                <Button
                    colorScheme="teal"
                    mt={10}
                    leftIcon={<EmailIcon />}
                    onClick={handleSubmitForm}
                >
                    Send
                </Button>
                {isLoading ? (
                    <CircularProgress
                        color={tealLightOrTealDarkColor}
                        isIndeterminate
                        display="block"
                        mt={5}
                    />
                ) : null}
                {isSuccess ? (
                    <Box>
                        <Alert status="info" mt={5}>
                            <AlertIcon />
                            <AlertDescription>
                                <Text fontSize="lg" fontWeight="normal">
                                    Request submitted! Thank you, our team will
                                    get back to you soon.
                                </Text>
                            </AlertDescription>
                            <CloseButton
                                aria-label="close-alert"
                                alignSelf="flex-start"
                                position="relative"
                                right={-1}
                                top={-1}
                                onClick={handleCloseAlertSuccess}
                            />
                        </Alert>
                    </Box>
                ) : null}
                {isFailure ? (
                    <Box>
                        <Alert status="error" mt={5}>
                            <AlertIcon />
                            <AlertDescription>
                                <Text fontSize="lg" fontWeight="normal">
                                    Oops! We are sorry. An internal error has
                                    occurred with our servers.
                                </Text>
                            </AlertDescription>
                            <CloseButton
                                aria-label="close-alert"
                                alignSelf="flex-start"
                                position="relative"
                                right={-1}
                                top={-1}
                                onClick={handleCloseAlertFailure}
                            />
                        </Alert>
                    </Box>
                ) : null}
            </Box>
        </SimpleGrid>
    );
}
