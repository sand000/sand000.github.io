import {
  Box,
  Button,
  HStack,
  Img,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import justBuy from "../Image/justbuy.png";
import trackingTime from "../Image/trackingtime.png";
import yoox from "../Image/yoox.png";
import unsplash from "../Image/unsplash.png";

import { LinkIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();

function Projects() {
  const { colorMode } = useColorMode();

  const isDark = colorMode === "dark";
  return (
    <Stack
      // border="1px solid red"
      id="project"
      p={[2, 10]}
      maxWidth="100vw"
      fontWeight={isDark ? "thin" : "hairline"}
      letterSpacing="2px"
    >
      <Text
        // border="1px solid red"
        fontSize="3xl"
        align="center"
        fontWeight="bold"
      >
        PROJECTS
      </Text>
      <SimpleGrid
        columns={[1, 1, 2, 2]}
        spacing="40px"
        //  border="1px solid red"
      >
        <VStack
          // data-aos="zoom-in-left"
          p={[2, 5]}
          spacing={2}
          borderRadius="10px"
          boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
        >
          <Text fontSize="2xl" fontWeight="semibold">
          TrackingTime
          </Text>
          <Box className="image-container4">
            <Img src={trackingTime} alt="img" h="250px" />
          </Box>

          <VStack spacing={3} align="left">
            <Text align="left">
            It is a time tracking service that helps organisation of any size manage their projects by tracking work times. My role was to create Sign-up & Login Page's UI/backend, task navbar & timer UI
            </Text>
            <HStack>
              <Text color="red.400" fontWeight="bold">Tech Stack:</Text>
              <Text>React, Redux, Chakra-UI, Node js, Express js, Mongo DB</Text>
            </HStack>
            <Text>Collobarotive project built in 4 day team lead by me</Text>
            <HStack>
              <Button
                leftIcon={<FaGithub />}
                colorScheme="blue"
                variant="solid"
                onClick={() =>
                  window.open(
                    "https://github.com/surajkm24/trackingtime.co-clone"
                  )
                }
              >
                Github
              </Button>
              <Button
                leftIcon={<LinkIcon />}
                colorScheme="blue"
                variant="solid"
                onClick={() =>
                  window.open("https://wondrous-stardust-501a11.netlify.app/")
                }
              >
                Live
              </Button>
            </HStack>
          </VStack>
        </VStack>
        <VStack
          // data-aos="fade-left"
          spacing={2}
          p={[2, 5]}
          borderRadius="10px"
          boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
        >
          <Text fontSize="2xl" fontWeight="semibold">
          JustBuy
          </Text>
          <Box className="image-container2">
            <Img src={justBuy} alt="img" h="250px" />
          </Box>

          <VStack spacing={3} align="left">
            <Text align="left">
            JustBuy is the fashion e-commerce website which offers a trendy collection of apparel based on upbeat designs. It was a group project & my role was to work on Mens & Womens Page's UI as well as Backend.
            </Text>
            <HStack>
              <Text color="red.400" fontWeight="bold">
                Tech Stack:
              </Text>
              <Text>React, Redux, Chakra-UI, Node js, Express js, Mongo DB, Render</Text>
            </HStack>
            <Text>Collobarotive project built in 4 day team lead by me</Text>
            <HStack>
              <Button
                leftIcon={<FaGithub />}
                colorScheme="blue"
                variant="solid"
                onClick={() =>
                  window.open("https://github.com/SonaliBhalerao/JustBuy")
                }
              >
                Github
              </Button>
              <Button
                leftIcon={<LinkIcon />}
                colorScheme="blue"
                variant="solid"
                onClick={() =>
                  window.open("https://sick-dress-4939-otio.vercel.app/")
                }
              >
                Live
              </Button>
            </HStack>
          </VStack>
        </VStack>
        <VStack
          // data-aos="fade-right"
          p={[2, 5]}
          spacing={2}
          borderRadius="10px"
          boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
        >
          <Text
            align="left"
            fontSize="2xl"
            fontWeight="semibold"
          >
            YOOX Clone
          </Text>
          <Box className="image-container1" h="250px">
            <Img src={yoox} alt="img" />
          </Box>

          <VStack spacing={3} align="left">
            <Text align="left">
            YOOX is an Italian e-commerce website for fashion & art products. It was an individual project where I've used HTML, CSS and JavaScript. Some of the features like Signup, Add to cart, Shipping address and Payment Page are there.
            </Text>
            <HStack>
              <Text color="red.400" fontWeight="bold">
              Tech Stack:
              </Text>
              <Text>HTML5,</Text>

              <Text>CSS3,</Text>

              <Text>JavaScript</Text>
            </HStack>
            <Text>Collobarotive project built in 4 day team lead by me</Text>
            <HStack>
              <Button
                leftIcon={<FaGithub />}
                colorScheme="blue"
                variant="solid"
                onClick={() =>
                  window.open("https://github.com/sand000/yoox-individual-project-")
                }
              >
                Github
              </Button>
              <Button
                leftIcon={<LinkIcon />}
                colorScheme="blue"
                variant="solid"
                onClick={() => window.open("https://idyllic-salamander-71880c.netlify.app/")}
              >
                Live
              </Button>
            </HStack>
          </VStack>
        </VStack>

        <VStack
          // data-aos="fade-right"
          p={[2, 5]}
          spacing={2}
          borderRadius="10px"
          boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;"
        >
          <Text fontSize="2xl" fontWeight="semibold">
          Unsplash Clone
          </Text>
          <Box className="image-container3" h="250px">
            <Img src={unsplash} alt="img" />
          </Box>

          <VStack spacing={3} align="left">
            <Text align="left">
            It is a free high-resolution HD images website. A collaborative project with total of five members. It was my first project since I started learning coding. It was really exciting to build which we see on websites.
            </Text>
            <HStack>
              <Text color="red.400" fontWeight="bold">
              Tech Stack:
              </Text>
              <Text>HTML,</Text>

              <Text>CSS</Text>

            </HStack>
            <Text>Solo project built in 4 day by me</Text>
            <HStack>
              <Button
                leftIcon={<FaGithub />}
                colorScheme="blue"
                variant="solid"
                onClick={() =>
                  window.open(
                    "https://github.com/sand000/clone-unsplash"
                  )
                }
              >
                Github
              </Button>
              <Button
                leftIcon={<LinkIcon />}
                colorScheme="blue"
                variant="solid"
                onClick={() =>
                  window.open("https://papaya-cannoli-e9274a.netlify.app/")
                }
              >
                Live
              </Button>
            </HStack>
          </VStack>
        </VStack>
      </SimpleGrid>
    </Stack>
  );
}

export default Projects;
