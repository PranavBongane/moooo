import {
  Box,
  Container,
  Flex,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
        mt={"20"}
    >
      <Container maxW="6xl" py={8}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent={{ md: "space-between" }}
        >
          <Box>
            <Text fontWeight="bold" mb={2}>
              Company
            </Text>
            <Flex direction={"column"} rowGap={"3"}>
              <Link href="#">About Us</Link>
              <Link href="#">Blog</Link>
              <Link href="#">Careers</Link>
              <Link href="#">Contact Us</Link>
            </Flex>
          </Box>
          <Box>
            <Text fontWeight="bold" mb={2}>
              Support
            </Text>
            <Flex direction={"column"} rowGap={"3"}>
              <Link href="#">Call Support</Link>
              <Link href="#">Mail Support</Link>
              <Link href="#">Door step Support</Link>
            </Flex>
          </Box>
          <Box>
            <Text fontWeight="bold" mb={2}>
              Support
            </Text>
            <Flex direction={"column"} rowGap={"3"}>
              <Link href="#">Call Support</Link>
              <Link href="#">Mail Support</Link>
              <Link href="#">Door step Support</Link>
            </Flex>
          </Box>
          
          <Box>
            <Text fontWeight="bold" mb={2}>
              Get in touch
            </Text>
            <Link href="#">
              <img
                src="https://img.freepik.com/premium-vector/purple-gradiend-social-media-logo_197792-1883.jpg?w=2000"
                alt="App Store"
                width="60"
                height="40"
              />
            </Link>
            <Link href="#">
              <img
                src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
                alt="Play Store"
                width="60"
                height="40"
              />
            </Link>
          </Box>
        </Flex>
      </Container>
      <Box
        borderTopWidth={1}
        borderStyle="solid"
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container maxW="6xl" py={4}>
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent={{ md: "space-between" }}
            alignItems={{ md: "center" }}
          >
            <Text fontSize="sm">
              &copy; 2023 Onkar Deshmukh. All Rights Reserved.
            </Text>
            <Flex mt={[4, 0]} direction="row" spacing={4}>
              <Link
                href="#"
                target="_blank"
                rel="noopener"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
