import React from "react";
import {
    Box,
    Flex,
    IconButton,
    useDisclosure,
    Stack,
    HStack,
    Link,
    Heading,
    useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import ColorModeSwitcher from "../ColorModeSwitcher";

export default function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const lightOrDark = useColorModeValue("gray.200", "gray.700");
    const lightOrUltraDark = useColorModeValue("gray.200", "gray.900");

    return (
        <Box
            borderBottom={1}
            borderStyle="solid"
            borderColor={lightOrUltraDark}
            minH="65px"
            px={4}
        >
            <Flex alignItems="center" justifyContent="space-between" h={16}>
                <IconButton
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    arial-label="Open Menu"
                    display={{ md: "none" }}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems="center">
                    <Heading as="h6" size="md">
                        Team Project
                    </Heading>
                    <HStack
                        as="nav"
                        spacing={4}
                        display={{ base: "none", md: "flex" }}
                    >
                        <Link
                            href="/"
                            px={2}
                            py={1}
                            rounded="md"
                            _hover={{
                                textDecoration: "none",
                                bg: lightOrDark,
                            }}
                        >
                            Home
                        </Link>
                        <Link
                            href="/map"
                            px={2}
                            py={1}
                            rounded="md"
                            _hover={{
                                textDecoration: "none",
                                bg: lightOrDark,
                            }}
                        >
                            Map
                        </Link>
                        <Link
                            href="/"
                            px={2}
                            py={1}
                            rounded="md"
                            _hover={{
                                textDecoration: "none",
                                bg: lightOrDark,
                            }}
                        >
                            About us
                        </Link>
                        <Link
                            href="/"
                            px={2}
                            py={1}
                            rounded="md"
                            _hover={{
                                textDecoration: "none",
                                bg: lightOrDark,
                            }}
                        >
                            Contact us
                        </Link>
                    </HStack>
                </HStack>
                <ColorModeSwitcher />
            </Flex>
            {isOpen ? (
                <Box pb={4} display={{ md: "none" }}>
                    <Stack as="nav" spacing={4}>
                        <Link
                            href="/"
                            px={2}
                            py={1}
                            rounded="md"
                            _hover={{
                                textDecoration: "none",
                                bg: lightOrDark,
                            }}
                        >
                            Home
                        </Link>
                        <Link
                            href="/map"
                            px={2}
                            py={1}
                            rounded="md"
                            _hover={{
                                textDecoration: "none",
                                bg: lightOrDark,
                            }}
                        >
                            Map
                        </Link>
                        <Link
                            href="/"
                            px={2}
                            py={1}
                            rounded="md"
                            _hover={{
                                textDecoration: "none",
                                bg: lightOrDark,
                            }}
                        >
                            About us
                        </Link>
                        <Link
                            href="/"
                            px={2}
                            py={1}
                            rounded="md"
                            _hover={{
                                textDecoration: "none",
                                bg: lightOrDark,
                            }}
                        >
                            Contact us
                        </Link>
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
}
