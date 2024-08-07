import {
  Container,
  Divider,
  Flex,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import States from "./States";
// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();

function About() {
  const { colorMode } = useColorMode();

  const isDark = colorMode === "dark";

  return (
    <>
      <Stack id="about" justify="center" align="center">
        <Text fontSize="3xl" align="center" fontWeight="bold">
          ABOUT
        </Text>
        <SimpleGrid
          columns={[1, 1, 2, 2]}
          p={10}
          spacing={10}
          // border="1px solid red"
          w={["100%", "100%", "80%", "80%"]}
        >
          <Flex data-aos="fade-right">
            <Text
              align="left"
              fontSize={["lg", "xl"]}
              fontWeight={isDark ? "thin" : "hairline"}
              letterSpacing="2px"
            >
              Proficient full stack MERN developer seeking a challenging role in a
              dynamic organization. Skilled in the MERN stack, responsive UI design
              using CSS and external CSS libraries, and developing RESTful APIs.
              Experienced in working in agile development environments, collaborating
              with cross-functional teams, and deploying applications to production.
              Looking to utilize technical skills and contribute to the development of
              innovative web solutions.
            </Text>
          </Flex>
          <Flex justify="start" w={["100%", "100%"]} data-aos="fade-left">
            <Flex direction="row">
              <Divider
                orientation="vertical"
                borderWidth="1px"
                bgColor={isDark ? "gray.200" : "gray.500"}
                borderRadius="10px"
              />
              <VStack spacing="10px">
                <Container>
                  <Text
                    fontSize={["md", "xl"]}
                    casing="capitalize"
                    fontWeight={isDark ? "thin" : "hairline"}
                    letterSpacing="2px"
                  >
                    Full Stack Web Development ( Full Time )
                  </Text>
                  <Text color={isDark ? "gray.200" : "gray.500"}>
                    Masai School Bengluru
                  </Text>
                </Container>
                <Container>
                  <Text
                    fontSize={["md", "xl"]}
                    casing="capitalize"
                    fontWeight={isDark ? "thin" : "hairline"}
                    letterSpacing="2px"
                  >
                    Fashion Designing ( B.A )
                  </Text>
                  <Text color={isDark ? "gray.200" : "gray.500"}>Institute for excellence in higher education Bhopal</Text>
                </Container>
                <Container>
                  <Text
                    fontSize={["md", "xl"]}
                    fontWeight={isDark ? "thin" : "hairline"}
                    letterSpacing="2px"
                  >
                    12 <Text as="sup">th</Text> - PCM
                  </Text>
                  <Text color={isDark ? "gray.200" : "gray.500"}>
                    Kendriya Vidyalaya Bhopal
                  </Text>
                </Container>
              </VStack>
            </Flex>
          </Flex>
        </SimpleGrid>

        <States />
        {/* <HStack p={2} justify="center" data-aos="fade-up">
          <SimpleGrid columns={[1, 1, 2, 2]} spacing={5}>
            <HStack spacing={5}>
              <Img
                boxSize="40px"
                src="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-1.svg"
                alt="icon"
              />
              <Text
                fontWeight={isDark ? "thin" : "hairline"}
                letterSpacing="2px"
              >
                1200+ Hours Practical Coding
              </Text>
            </HStack>
            <HStack spacing={5}>
              <Img
                boxSize="40px"
                src="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-2.svg"
                alt="icon"
              />
              <Text
                fontWeight={isDark ? "thin" : "hairline"}
                letterSpacing="2px"
              >
                300+ Hours Data Structures & Algorithms
              </Text>
            </HStack>
            <HStack spacing={5}>
              <Img
                boxSize="40px"
                src="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-3.svg"
                alt="icon"
              />
              <Text
                fontWeight={isDark ? "thin" : "hairline"}
                letterSpacing="2px"
              >
                100+ Hours Soft Skill Development
              </Text>
            </HStack>
            <HStack spacing={5}>
              <Img
                boxSize="40px"
                src="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-4.svg"
                alt="icon"
              />
              <Text
                fontWeight={isDark ? "thin" : "hairline"}
                letterSpacing="2px"
              >
                100+ Hours Math & Logic
              </Text>
            </HStack>
            <HStack spacing={5}>
              <Img
                boxSize="40px"
                src="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-5.svg"
                alt="icon"
              />
              <Text
                fontWeight={isDark ? "thin" : "hairline"}
                letterSpacing="2px"
              >
                80+ Mini Projects
              </Text>
            </HStack>
            <HStack spacing={5}>
              <Img
                boxSize="40px"
                src="https://www.masaischool.com/img/hire-masai-grads/FindTalent/find-talent-6.svg"
                alt="icon"
              />
              <Text
                fontWeight={isDark ? "thin" : "hairline"}
                letterSpacing="2px"
              >
                10+ Projects{" "}
              </Text>
            </HStack>
            <HStack spacing={5}>
              <Img
                boxSize="40px"
                rounded="10px"
                src="https://git-scm.com/images/logos/logomark-orange@2x.png"
                alt="git-commit"
              />
              <Text
                fontWeight={isDark ? "thin" : "hairline"}
                letterSpacing="2px"
              >
                120+ Git Commits
              </Text>
            </HStack>
            <HStack spacing={5}>
              <Img
                boxSize="40px"
                rounded="10px"
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="git-commit"
              />
              <Text
                fontWeight={isDark ? "thin" : "hairline"}
                letterSpacing="2px"
              >
                220+ Contributions in the last year
              </Text>
            </HStack>
          </SimpleGrid>
        </HStack> */}
      </Stack>
    </>
  );
}

export default About;
