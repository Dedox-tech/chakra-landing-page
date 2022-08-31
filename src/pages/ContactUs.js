import {React, useState} from "react";
import { useNavigate} from 'react-router-dom';

import { Box, Heading, FormControl, Container, useBreakpointValue, FormLabel, Input, FormHelperText, Button, Textarea, Divider } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


export default function ContactUs() {

    const navigate = useNavigate();

    const [message, setMessage] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');

    const setMessageValue = event => {
        setMessage(event.target.value);
      };

      const setFullNameValue = event => {
        setFullName(event.target.value);
      };

      const setEmailValue = event => {
        setEmail(event.target.value);
      };

    const onClickSend = () =>{
        navigate("/confirmation");
    }

    const customMaxWidth = useBreakpointValue({
        xl: "container.lg",
        lg: "4xl",
        md: "2xl",
    });

    return (
        <Box>
            <NavBar />
            <Container maxWidth={customMaxWidth} centerContent>
                <Heading as="h1" align="center">Contact Us</Heading>
                <FormLabel>If you have some quesion to ask us please provide us your fullname, email and a message.</FormLabel>
                <FormControl>
                    <FormLabel>Full Name</FormLabel>
                    <Input type='Text' onChange={setFullNameValue} values={fullName} />
                </FormControl>
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' onChange={setEmailValue} values={email} />
                    <FormHelperText>We ll never share your email.</FormHelperText>
                </FormControl>

                <FormControl>
                    <FormLabel>Message</FormLabel>
                    <Textarea placeholder="Write your message..." onChange={setMessageValue} values={message} />
                </FormControl>
                <FormControl>
                <Divider/>
                </FormControl>

                {"\n"}

                <FormControl align="right" m={4}>
                <Button bg={Footer.tealLightOrTealDarkColor}
                            color={Footer.whiteOrGrayColor}
                            leftIcon={<EmailIcon />}
                            colorScheme='teal'
                            _hover={{ bg: "teal.600" }}
                            onClick={onClickSend}
                        >Send</Button>
                </FormControl>
                

            </Container>


            <Footer />
        </Box>
    );
}