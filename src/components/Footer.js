import React from "react";
import {
    Container,
    useBreakpointValue,
    SimpleGrid,
    Stack,
    Heading,
    Text,
    Link,
    Input,
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
    useDisclosure,
} from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    const { isOpen, onOpen, onClose } = useDisclosure();

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
                            bg={useColorModeValue(
                                "blackAlpha.100",
                                "whiteAlpha.100"
                            )}
                            rounded="full"
                        />
                        <IconButton
                            aria-label="Twitter"
                            href="/"
                            icon={<FaTwitter />}
                            w={8}
                            h={9}
                            bg={useColorModeValue(
                                "blackAlpha.100",
                                "whiteAlpha.100"
                            )}
                            rounded="full"
                        />
                        <IconButton
                            aria-label="Linkedin"
                            href="/"
                            icon={<FaLinkedin />}
                            w={8}
                            h={9}
                            bg={useColorModeValue(
                                "blackAlpha.100",
                                "whiteAlpha.100"
                            )}
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
                        <Input
                            placeholder="Your email address"
                            _focus={{ bg: "whiteAlpa.300" }}
                        />
                        <IconButton
                            bg={useColorModeValue("teal.500", "teal.200")}
                            color={useColorModeValue("white", "gray.800")}
                            icon={<BellIcon />}
                            aria-label="Suscribe"
                            _hover={{ bg: "teal.600" }}
                            onClick={onOpen}
                        />
                    </Stack>
                </Stack>
            </SimpleGrid>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Confirm subscription?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>
                            Sit nulla est ex deserunt exercitation anim
                            occaecat. Nostrud ullamco deserunt aute id consequat
                            veniam incididunt duis in sint irure nisi. Mollit
                            officia cillum Lorem ullamco minim nostrud elit
                            officia tempor esse quis.
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="teal" onClick={onClose} mr={2}>
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
