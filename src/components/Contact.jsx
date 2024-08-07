import { EmailIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
 
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  useColorMode,
  useToast,
  VStack,
} from "@chakra-ui/react";

import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useFormik } from "formik";
import { contactFormSchema } from "../schemas/ContactForm";

// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();

function Contact() {
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    validationSchema: contactFormSchema,
    onSubmit: (values, action) => {
      emailjs
        .send(
          process.env.REACT_APP_FORM_SERVICE_KEY, 
          process.env.REACT_APP_FORM_TEMPLATE_KEY,
          values,
          process.env.REACT_APP_FORM_API_KEY
        )
        .then(
          () => {
            toast({
              title: "Sent",
              description: "We've sent your mail successfully",
              status: "success",
              duration: 2000,
              isClosable: true,
            });
          },
          () => {
            toast({
              title: `Fail`,
              description: "Try Later...",
              isClosable: true,
            });
          }
        );
      action.resetForm();
    },
  });

  const { colorMode } = useColorMode();

  const isDark = colorMode === "dark";
  return (
    <Stack
      id="contact"
      p={2}
      fontWeight={isDark ? "thin" : "hairline"}
      letterSpacing="2px"
    >
      <Text fontSize="3xl" align="center" fontWeight="bold">
        CONTACT ME
      </Text>
      <SimpleGrid columns={[1, 1, 2, 2]} spacing="10">
        <VStack
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          p={10}
          data-aos="zoom-in"
          spacing={10}
          justify="center"
        >
          {/* <Img
            src={myImage}
            alt="img"
            rounded="full"
            border="1px solid gray"
            boxSize="150px"
            objectFit="fill"
          /> */}
          <Text fontSize="2xl" fontWeight="semibold">
            Sandhya Kushwaha
          </Text>
          <Text fontSize={["lg", "lg", "2xl", "2xl"]} fontWeight="semibold">
            +91-9399541841
          </Text>
          <Text fontSize={["lg", "lg", "2xl", "2xl"]} fontWeight="semibold">
            kushwahasandhya68@gmail.com
          </Text>

          {/* <SimpleGrid columns={[1, 2, 2, 2]} spacing="10px" w="70%"> */}
            <Button
            width={"150px"}
              onClick={() => window.open("https://wa.me/+919179826528")}
              colorScheme="whatsapp"
              leftIcon={<FaWhatsapp />}
              fontWeight="semibold"
              letterSpacing="2px"
            >
              WhatsApp
            </Button>
            <Button
              onClick={() =>
                window.open("https://www.linkedin.com/in/sandhya-kushwaha-a6b608157/")
              }
              width={"150px"}
              colorScheme="linkedin"
              leftIcon={<FaLinkedin />}
              fontWeight="semibold"
              letterSpacing="2px"
            >
              LinkedIn
            </Button>
            <Button
             width={"150px"}
              onClick={() =>
                window.open("https://www.linkedin.com/in/sandhya-kushwaha-a6b608157/")
              }
              background={"black"}
               colorScheme="linkedin"
              leftIcon={<FaGithub />}
              fontWeight="semibold"
              letterSpacing="2px"
            >
              GitHub
            </Button>
          {/* </SimpleGrid> */}
        </VStack>

        <VStack
          spacing={10}
          boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px"
          p="2px"
          py={12}
          data-aos="zoom-in"
        >
          <Text
            align="center"
            fontSize={["lg", "2xl", "3xl", "3xl"]}
            fontWeight="bold"
            pb="10px"
          >
            Send Me Email
          </Text>
          <Container>
            <form onSubmit={formik.handleSubmit}>
              <FormControl isRequired>
                <FormLabel>Enter Name</FormLabel>
                <Input
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  type="text"
                  name="name"
                  mb={5}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  name="email"
                  mb={5}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Enter Your Message</FormLabel>
                <Textarea
                  onChange={formik.handleChange}
                  value={formik.values.message}
                  name="message"
                  placeholder="Here is a sample placeholder"
                  size="sm"
                  mb={5}
                />
              </FormControl>
              <Button
                type="submit"
                leftIcon={<EmailIcon />}
                variant="outline"
                w="100%"
                _hover={{ backgroundColor: "blue.400" }}
                bgColor="blue.500"
                // onClick={sendEmail}
                fontWeight="semibold"
                letterSpacing="2px"
              >
                Send
              </Button>
            </form>
          </Container>
        </VStack>
      </SimpleGrid>
    </Stack>
  );
}

export default Contact;
