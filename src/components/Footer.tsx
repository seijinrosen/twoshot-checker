import { Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <VStack as="footer" spacing={4} mt={12}>
      <Stack mt={4} direction="row" spacing="12px">
        <FaGithub />
        <FaTwitter color="#1DA1F2" />
      </Stack>
      <Text>
        Copyright ©{" "}
        <Link href="https://github.com/seijinrosen" isExternal>
          seijinrosen
        </Link>{" "}
        {new Date().getFullYear()}.
      </Text>
    </VStack>
  );
};

export default Footer;
