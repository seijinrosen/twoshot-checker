import { Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <VStack
      as="footer"
      gap={4}
      mt="auto"
      mb={12}
    >
      <Stack
        mt={4}
        direction="row"
        gap={10}
      >
        <Link
          href="https://github.com/seijinrosen/twoshot-checker"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub size={30} />
        </Link>
        <Link
          href="https://twitter.com/seijinrosen"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaTwitter
            size={30}
            color="#1DA1F2"
          />
        </Link>
      </Stack>
      <Text>
        Copyright ©{" "}
        <Link
          href="https://github.com/seijinrosen"
          rel="noopener noreferrer"
          target="_blank"
        >
          seijinrosen
        </Link>{" "}
        {new Date().getFullYear()}.
      </Text>
    </VStack>
  );
};

export default Footer;
