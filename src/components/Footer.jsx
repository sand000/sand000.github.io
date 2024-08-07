import { Icon, Stack, Text } from "@chakra-ui/react";
import { FcLike } from "react-icons/fc";

function Footer() {
  return (
    <Stack w="100%" mb="1px">
      <Text
        align="center"
        fontSize={["sm", "sm", "2xl"]}
        fontWeight="semibold"
        letterSpacing="2px"
      >
        Made with <Icon boxSize="25px" as={FcLike} /> by Sandhya
      </Text>
    </Stack>
  );
}

export default Footer;
