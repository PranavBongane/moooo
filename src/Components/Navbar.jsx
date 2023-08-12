import React from "react";
import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { DarkMode } from "./DarkMode";

const Navbar = () => {
  return (
    <Box py="4" fontWeight={"600"} mb="8vh">
      <Flex justify="space-between" align="center" px="6">
        <Link to="/">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nRRvE87pvsXRdPweRgQljCWzM5at4Z5Hexzvln5lzw&usqp=CAU&ec=48665701"
            w="11vh"
            borderRadius={"50%"}
            my="auto"
          />
        </Link>
        <Box>
          <Flex align="center" gap="20">
            <Link to="/" mx="4" fontSize="lg">
              <Text
                _hover={{
                  color: "red",
                }}
              >
                Home
              </Text>
            </Link>
            <Link to="/about" mx="4" fontSize="lg">
              <Text
                _hover={{
                  color: "red",
                }}
              >
                About
              </Text>
            </Link>
            <Link to="/product" mx="4" fontSize="lg">
              <Text
                _hover={{
                  color: "red",
                }}
              >
                Products
              </Text>
            </Link>
            <Link to="/dashboard" mx="4" fontSize="lg">
              <Text
                _hover={{
                  color: "red",
                }}
              >
                Dashboard
              </Text>
            </Link>
            <Link to="/health" mx="4" fontSize="lg">
              <Text
                _hover={{
                  color: "red",
                }}
              >
                Health
              </Text>
            </Link>
            <Link to="/milk" mx="4" fontSize="lg">
              <Text
                _hover={{
                  color: "red",
                }}
              >
                Milk
              </Text>
            </Link>
            <Link to="/fodder" mx="4" fontSize="lg">
              <Text
                _hover={{
                  color: "red",
                }}
              >
                Fodder
              </Text>
            </Link>
            <Link to="/customer" mx="4" fontSize="lg">
              <Text
                _hover={{
                  color: "red",
                }}
              >
                Customer
              </Text>
            </Link>

            <Link to="/business" mx="4" fontSize="lg">
              <Text
                _hover={{
                  color: "red",
                }}
              >
                Bussiness
              </Text>
            </Link>

            <DarkMode />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
