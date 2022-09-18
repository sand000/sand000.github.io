import { HStack, Icon } from "@chakra-ui/react";
import { FaGithub, FaGoogle, FaLinkedinIn } from "react-icons/fa";

function Social() {
  return (
    <HStack spacing="10" ml={[0, 0, 0, "120px"]}>
      <Icon
        as={FaGithub}
        boxSize="30"
        cursor="pointer"
        onClick={() => window.open("https://github.com/spsanchore13")}
      />
      <Icon
        as={FaLinkedinIn}
        boxSize="30"
        cursor="pointer"
        onClick={() => window.open("https://www.linkedin.com/in/spsanchore13/")}
      />
      <Icon
        as={FaGoogle}
        boxSize="30"
        cursor="pointer"
        onClick={() => window.open("mailto:shantilalpatliya18@gmail.com")}
      />
    </HStack>
  );
}

export default Social;
