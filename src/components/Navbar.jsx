import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

import { FaSun, FaMoon } from "react-icons/fa";
import styles from "./Navbar.module.css";
import Social from "./Social";
import { Link } from "react-scroll";
import { useRef } from "react";
import { DownloadIcon, HamburgerIcon } from "@chakra-ui/icons";
import myresume from"../Resume/Sandhya_Kushwaha_Resume.pdf";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDark = colorMode === "dark";

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <HStack
        display={["none", "none", "none", "flex"]}
        zIndex={10}
        position="sticky"
        top="0"
        bgColor={isDark ? "gray.800" : "white"}
        borderBottom="1px"
        borderColor="gray.100"
        h="60px"
      >
        <Social />
        <Spacer />

        <Flex px="20px" align="center">
          <HStack
            w="50vw"
            display="flex"
            justifyContent="space-evenly"
            fontWeight="semibold"
            letterSpacing="3px"
          >
            <Box cursor="pointer">
              <Link
                cursor="pointer"
                to="home"
                smooth={true}
                duration={1000}
                spy={true}
                offset={-100}
                activeClass={styles.active}
              >
                HOME
              </Link>
            </Box>
            <Box cursor="pointer">
              <Link
                to="about"
                smooth={true}
                duration={1000}
                spy={true}
                offset={-40}
                activeClass={styles.active}
              >
                ABOUT
              </Link>
            </Box>
            <Box cursor="pointer">
              <Link
                to="skills"
                smooth={true}
                duration={1000}
                spy={true}
                offset={-40}
                activeClass={styles.active}
              >
                SKILLS
              </Link>
            </Box>
            <Box cursor="pointer">
              <Link
                to="project"
                smooth={true}
                duration={1000}
                spy={true}
                offset={-30}
                activeClass={styles.active}
              >
                PROJECTS
              </Link>
            </Box>

            <Box cursor="pointer">
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                spy={true}
                offset={-30}
                activeClass={styles.active}
              >
                CONTACT
              </Link>
            </Box>
            <a href={myresume} download>
              <Button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1OhIu7AnClPQ1X5EmcuEVSRjNNxEPPqLY/view?usp=sharing"
                  )
                }
                mt={5}
                mb={5}
                colorScheme="blue"
                fontWeight="semibold"
                letterSpacing="2px"
              >
                RESUME
                <DownloadIcon ml="8px" />
              </Button>
            </a>
          </HStack>
          <IconButton
            ml="10px"
            isRound
            icon={isDark ? <FaSun /> : <FaMoon />}
            onClick={toggleColorMode}
          />
        </Flex>
      </HStack>

      <HStack
        position="sticky"
        top={0}
        px="10px"
        py="5px"
        zIndex={10}
        borderBottom="1px"
        borderColor="gray.100"
        bgColor={isDark ? "gray.800" : "white"}
        display={["flex", "flex", "flex", "none"]}
      >
        <IconButton
          aria-label="Open Menu"
          mr={2}
          size="md"
          onClick={onOpen}
          isRound={true}
          icon={<HamburgerIcon />}
        />
        <Spacer />
        <Social />
        <IconButton
          ml="10px"
          isRound
          icon={isDark ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}
        />
      </HStack>

      <Drawer
        size={["xs", "xs"]}
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <VStack align="left" spacing={5}>
              <Link
                to="home"
                smooth={true}
                duration={1000}
                spy={true}
                activeClass={styles.active}
              >
                HOME
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={1000}
                spy={true}
                // offset={50}
                activeClass={styles.active}
              >
                ABOUT
              </Link>
              <Link
                to="skills"
                smooth={true}
                duration={1000}
                spy={true}
                // offset={50}
                activeClass={styles.active}
              >
                SKILLS
              </Link>
              <Link
                to="project"
                smooth={true}
                duration={1000}
                spy={true}
                // offset={50}
                activeClass={styles.active}
              >
                PROJECTS
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                spy={true}
                // offset={50}
                activeClass={styles.active}
              >
                CONTACT
              </Link>
              <a href={myresume} download>
                <Button
                  mt={5}
                  mb={5}
                  colorScheme="blue"
                  fontWeight="semibold"
                  letterSpacing="2px"
                >
                  RESUME
                  <DownloadIcon ml="8px" />
                </Button>
              </a>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navbar;
