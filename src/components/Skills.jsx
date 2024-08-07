import {
  Box,
  Img,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";

import jslogo from "../Image/js.svg";
import htmllogo from "../Image/html.png";
import csslogo from "../Image/css.png";
import reactlogo from "../Image/react.png";
import reduxlogo from "../Image/redux.png";
import flutterlogo from "../Image/flutter.png";
import dartlogo from "../Image/dart.jpg";
import chakralogo from "../Image/chakralogo.png";
import figmalogo from "../Image/figma.svg";
import mongodblogo from "../Image/mongodb.svg";
import dsalogo from "../Image/dsa.png";
import githublogo from "../Image/github.png";
import nodeljslogo from "../Image/nodejs.svg";
import expresslogo from "../Image/expressjs.svg";
import mongooselogo from "../Image/mongoose.png";

function Skills() {
  const { colorMode } = useColorMode();

  const isDark = colorMode === "dark";
  return (
    <Stack py="50px" px="10px" id="skills">
      <Text fontSize="3xl" align="center" letterSpacing="2px" fontWeight="bold">
        SKILLS
      </Text>
      <SimpleGrid columns={[2, 3, 4, 6]} p={10} spacing={5}>
        <Box align="center">
          <Img boxSize="80px" src={htmllogo} />
          <Text
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
            p="4"
            fontSize="xl"
          >
            HTML
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="80px"
            src={csslogo}
            // src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
          />
          <Text
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
            p="4"
            fontSize="xl"
          >
            CSS
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="80px"
            src={jslogo}
            // src="https://brandfetch.com/_next/image?url=https%3A%2F%2Fasset.brandfetch.io%2FidIq_kF0rb%2Fidv3zwmSiY.jpeg&w=1920&q=75"
            // src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
          />
          <Text
            p="4"
            fontSize="xl"
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
          >
            JAVASCRIPT
          </Text>
        </Box>

        <Box align="center">
          <Img
            boxSize="80px"
            src={reactlogo}
            // src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
          <Text
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
            p="4"
            fontSize="xl"
          >
            REACT
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="80px"
            src={reduxlogo}
            // src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
          />
          <Text
            p="4"
            fontSize="xl"
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
          >
            REDUX
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="80px"
            src={nodeljslogo}
            // src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
          />
          <Text
            p="4"
            fontSize="xl"
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
          >
            NODE JS
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="80px"
            src={expresslogo}
            // src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
          />
          <Text
            p="4"
            fontSize="xl"
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
          >
            EXPRESS JS
          </Text>
        </Box>
        <Box align="center">
          <Img boxSize="80px" src={mongooselogo} />
          <Text
            p="4"
            fontSize="xl"
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
          >
            MONGOOSE
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="80px"
            src={mongodblogo}
            // src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
          />
          <Text
            p="4"
            fontSize="xl"
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
          >
            MONGO DB
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="80px"
            borderRadius="50%"
            src={chakralogo}
            // src="https://images.opencollective.com/chakra-ui-pro/61bd1dd/logo/256.png"
          />
          <Text
            p="4"
            fontSize="xl"
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
          >
            CHAKRA-UI
          </Text>
        </Box>

        <Box align="center">
          <Img
            boxSize="80px"
            src={githublogo}
            // src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          />
          <Text
            p="4"
            fontSize="xl"
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
          >
            GITHUB
          </Text>
        </Box>

        <Box align="center">
          <Img
            boxSize="80px"
            src={dsalogo}
            // src="https://images.credly.com/images/e4e5214a-e9f3-414c-9ebc-d10467a92816/Data_Structures_and_Algorithms.png"
          />
          <Text
            p="4"
            fontSize="xl"
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
          >
            DSA
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="80px"
            src={figmalogo}
            // src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
          />
          <Text
            p="4"
            fontSize="xl"
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
          >
            FIGMA
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="80px"
            borderRadius="full"
            src={dartlogo}
            // src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
          />
          <Text
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
            p="4"
            fontSize="xl"
          >
            DART
          </Text>
        </Box>
        <Box align="center">
          <Img
            boxSize="80px"
            src={flutterlogo}
            // src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
          />
          <Text
            fontWeight={isDark ? "thin" : "hairline"}
            letterSpacing="2px"
            p="4"
            fontSize="xl"
          >
            FLUTTER
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  );
}

export default Skills;
