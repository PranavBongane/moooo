import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

function Carousel2() {
  const [count, setCount] = useState(0);
  const arr = [
    "https://www.dairycorner.co.in/wp-content/uploads/2020/07/A2cowghee.jpg",
    "https://cdn.shopify.com/s/files/1/0644/5993/1878/products/a2-gir-cow-milk-1-litreday-716607.jpg?v=1673547660",
    "https://www.cookwithmanali.com/wp-content/uploads/2013/06/Homemade-Paneer-Easy-Recipe-500x500.jpg",
    "https://5.imimg.com/data5/CK/IX/MY-43917690/fresh-curd-500x500.png",
    "https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthiest-cheese-1296x728-swiss.jpg",
  ];

  const handlePrev = () => setCount((count) => Math.max(0, count - 1));
  const handleNext = () =>
    setCount((count) => Math.min(arr.length - 4, count + 1));

  return (
    <>
      <Heading textAlign={"center"} size="lg" mb="5">
        Our Product{" "}
      </Heading>

      <Flex
        gap={2}
        w={{ lg: "80%", md: "100%", sm: "100%" }}
        ml="3rem"
        flexDirection={["column", "column", "column", "row"]}
        alignItems="center"
        margin={"auto"}
      >
        <Button
          onClick={handlePrev}
          disabled={count === 0}
          bgColor="white"
          mt="5rem"
        >
          <Icon as={ChevronLeftIcon} w={10} h={10} />
        </Button>
        {[count, count + 1, count + 2, count + 3].map((index) => (
          <Box
            key={index}
            opacity={index >= arr.length ? 0 : 1}
            transition="opacity 0.3s ease-in-out"
            boxSize={{ lg: "250px", md: "200px", sm: "150px" }}
            position="relative"
          >
            <Image
              src={arr[index]}
              boxSize="100%"
              objectFit="contain"
              borderRadius="md"
              boxShadow="base"
            />
            <Link to="/product">
            <Button
              mt="8"
              bg="#144950"
              color={"white"}
              size="sm"
              w="full"
              position="absolute"
            >
              Buy now
            </Button></Link>
          </Box>
        ))}
        <Button
          onClick={handleNext}
          bgColor="white"
          _hover={{ bg: "white" }}
          mt="5rem"
          disabled={count >= arr.length - 4}
        >
          <Icon as={ChevronRightIcon} w={10} h={10} />
        </Button>
      </Flex>
      
    </>
  );
}

export default Carousel2;
