import { Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <VStack as="footer" spacing={4} my={12}>
      <Stack mt={4} direction="row" spacing={10}>
        <Link href="https://github.com/seijinrosen/twoshot-checker" isExternal>
          <FaGithub fontSize={30} />
        </Link>
        <Link href="https://twitter.com/seijinrosen" isExternal>
          <FaTwitter fontSize={30} color="#1DA1F2" />
        </Link>
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
