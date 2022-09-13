/* eslint-disable no-nested-ternary */
/* eslint-disable no-console */
import React, { useState } from "react";
import {
    Container,
    Box,
    useBreakpointValue,
    SimpleGrid,
    Stack,
    Heading,
    Text,
    Link,
    Input,
    FormControl,
    Button,
    IconButton,
    useColorModeValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Alert,
    AlertIcon,
    AlertDescription,
    CircularProgress,
    useDisclosure,
    FormErrorMessage,
    CloseButton,
} from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import validateErrorFooterForm from "../utils/validateErrorFooterForm";

export default function Footer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [emailValue, setEmailValue] = useState("hi@example.com");
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(null);
    const [isFailure, setIsFailure] = useState(null);
    const isError = !validateErrorFooterForm(emailValue);
    const blackOrWhiteColor = useColorModeValue(
        "blackAlpha.100",
        "whiteAlpha.100"
    );
    const whiteOrGrayColor = useColorModeValue("white", "gray.800");
    const tealLightOrTealDarkColor = useColorModeValue("teal.500", "teal.200");

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

    const handleChangeInputEmail = (event) => {
        setEmailValue(event.target.value);
    };

    const handleCloseAlertSuccess = () => {
        setIsSuccess(null);
    };

    const handleCloseAlertFailure = () => {
        setIsFailure(null);
    };

    const hanldeClickSubmit = async () => {
        console.log("The email value is: ", emailValue);
        console.log("The error is: ", isError);
        onClose();
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
                    body: JSON.stringify({ email: emailValue }),
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
        <Container maxWidth={customMaxWidth} py={customPadding}>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={8}>
                <Stack spacing={6}>
                    <Heading as="h6" size="md">
                        Team Project
                    </Heading>
                    <Text fontSize="sm">
                        © 2022 Vaccination Project. All rights reserved
                    </Text>
                    <Stack direction="row" spacing={4}>
                        <IconButton
                            aria-label="Facebook"
                            href="/"
                            icon={<FaFacebook />}
                            w={8}
                            h={9}
                            bg={blackOrWhiteColor}
                            rounded="full"
                        />
                        <IconButton
                            aria-label="Twitter"
                            href="/"
                            icon={<FaTwitter />}
                            w={8}
                            h={9}
                            bg={blackOrWhiteColor}
                            rounded="full"
                        />
                        <IconButton
                            aria-label="Linkedin"
                            href="/"
                            icon={<FaLinkedin />}
                            w={8}
                            h={9}
                            bg={blackOrWhiteColor}
                            rounded="full"
                        />
                    </Stack>
                </Stack>
                <Stack align="flex-start">
                    <Text fontSize="lg" mb={3} fontWeight="500">
                        Privacy
                    </Text>
                    <Link href="/" mb={1}>
                        Help center
                    </Link>
                    <Link href="/" mb={1}>
                        Term of services
                    </Link>
                    <Link href="/" mb={1}>
                        License
                    </Link>
                    <Link href="/" mb={1}>
                        Legal
                    </Link>
                </Stack>
                <Stack align="flex-start">
                    <Text fontSize="lg" mb={3} fontWeight="500">
                        Services
                    </Text>
                    <Link href="/" mb={1}>
                        Pricing
                    </Link>
                    <Link href="/" mb={1}>
                        Blog
                    </Link>
                    <Link href="/" mb={1}>
                        User guide
                    </Link>
                    <Link href="/" mb={1}>
                        Overseas
                    </Link>
                </Stack>
                <Stack align="flex-start">
                    <Text fontSize="lg" mb={3} fontWeight="500">
                        Stay up to date
                    </Text>
                    <Stack direction="row">
                        <FormControl isInvalid={isError}>
                            <Input
                                placeholder="Your email address"
                                _focus={{ bg: "whiteAlpa.300" }}
                                value={emailValue}
                                onChange={handleChangeInputEmail}
                                variant="filled"
                            />
                            {isError ? (
                                <FormErrorMessage>
                                    Please enter a valid email address
                                </FormErrorMessage>
                            ) : null}
                        </FormControl>
                        <IconButton
                            bg={tealLightOrTealDarkColor}
                            color={whiteOrGrayColor}
                            icon={<BellIcon />}
                            aria-label="Suscribe"
                            _hover={{ bg: "teal.600" }}
                            onClick={onOpen}
                        />
                    </Stack>
                    {isLoading ? (
                        <CircularProgress
                            position="relative"
                            top={2}
                            right={0}
                            color={tealLightOrTealDarkColor}
                            isIndeterminate
                        />
                    ) : null}
                    {isSuccess ? (
                        <Box>
                            <Alert
                                status="info"
                                position="relative"
                                top={2}
                                right={0}
                            >
                                <AlertIcon />
                                <AlertDescription>
                                    Email saved!
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
                            <Alert
                                status="error"
                                position="relative"
                                top={2}
                                right={0}
                            >
                                <AlertIcon />
                                <AlertDescription>
                                    Oops! Server error
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
                </Stack>
            </SimpleGrid>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Confirm subscription?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>
                            Thank you for your interest in our newsletter.
                            Please right click in the button below to confirm
                            your subscription. You can cancel anytime without
                            worries.
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            colorScheme="teal"
                            onClick={hanldeClickSubmit}
                            mr={2}
                        >
                            Confirm
                        </Button>
                        <Button variant="ghost" onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Container>
    );
}
