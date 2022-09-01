import { React } from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Heading,
    Container,
    useBreakpointValue,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Button,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Confirmation() {
    const navigate = useNavigate();

    const customMaxWidth = useBreakpointValue({
        xl: "container.lg",
        lg: "4xl",
        md: "2xl",
    });

    const onClickGoToMap = () => {
        navigate("/map");
    };

    return (
        <Box>
            <NavBar />
            <Container maxWidth={customMaxWidth} centerContent mt={10}>
                <Heading as="h1" align="center">
                    Confirmation
                </Heading>
                <Alert
                    status="success"
                    variant="subtle"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    minHeight="200px"
                    mt={5}
                    p={5}
                >
                    <AlertIcon boxSize="40px" mr={0} />
                    <AlertTitle mt={4} mb={1} fontSize="lg">
                        Request submitted!
                    </AlertTitle>
                    <AlertDescription maxWidth="sm">
                        Thanks for submitting your request. Our team will get
                        back to you soon.
                    </AlertDescription>
                    <Button onClick={onClickGoToMap} mt={5}>
                        Go To Maps
                    </Button>
                </Alert>
            </Container>
            <Footer />
        </Box>
    );
}
