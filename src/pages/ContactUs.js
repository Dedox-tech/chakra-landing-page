import { React, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Heading,
    FormControl,
    Container,
    useBreakpointValue,
    FormLabel,
    Input,
    FormHelperText,
    Button,
    Textarea,
    Divider,
    Text,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import emailjs from '@emailjs/browser';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


export default function ContactUs() {

    // eslint-disable-next-line no-undef
    const form = useRef();

    emailjs.init("mXd60PXQzk7kHLUHu");

    const navigate = useNavigate();

    const [message, setMessage] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");

    const setMessageValue = (event) => {
        setMessage(event.target.value);
    };

    const setFullNameValue = (event) => {
        setFullName(event.target.value);
    };

    const setEmailValue = (event) => {
        setEmail(event.target.value);
    };

    const onClickSend = () => {

        emailjs.sendForm('vaccination_esl_bootcamp', 'template_lizt905', form.current, "mXd60PXQzk7kHLUHu")
        .then((result)=>{
            console.log(result.text);
        }, (error)=> {
            console.log(error.text)
        });

        navigate("/confirmation");
    };

    const customMaxWidth = useBreakpointValue({
        xl: "container.lg",
        lg: "4xl",
        md: "2xl",
    });

    return (
        <Box>
            <NavBar />
            <Container maxWidth={customMaxWidth} centerContent mt={10}>
                <Heading as="h1" align="center">
                    Contact us
                </Heading>
                <Text mt={5}>
                    If you have some quesion to ask us please provide us your
                    full name, email and a message.
                </Text>
                <form ref={form} onSubmit={onClickSend}>
                    <FormControl mt={5}>
                        <FormLabel>Full Name</FormLabel>
                        <Input
                            type="Text"
                            name='user_name'
                            onChange={setFullNameValue}
                            values={fullName}
                            size="lg"
                        />
                    </FormControl>
                    <FormControl mt={5}>
                        <FormLabel>Email address</FormLabel>
                        <Input
                            type="email"
                            name='user_email'
                            onChange={setEmailValue}
                            values={email}
                            size="lg"
                        />
                        <FormHelperText>
                            We ll never share your email.
                        </FormHelperText>
                    </FormControl>
                    <FormControl mt={5}>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                            name='message'
                            placeholder="Write your message..."
                            onChange={setMessageValue}
                            values={message}
                        />
                    </FormControl>
                    <FormControl>
                        <Divider />
                    </FormControl>
                    {"\n"}
                    <FormControl align="right" m={5}>
                        <Button
                            bg={Footer.tealLightOrTealDarkColor}
                            color={Footer.whiteOrGrayColor}
                            leftIcon={<EmailIcon />}
                            colorScheme="teal"
                            _hover={{ bg: "teal.600" }}
                            onClick={onClickSend}
                        >
                            Send
                        </Button>
                    </FormControl>
                </form>

            </Container>

            <Footer />
        </Box>
    );
}
