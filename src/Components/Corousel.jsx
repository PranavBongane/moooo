import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  IconButton,
  Slide,
  useDisclosure,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

const images = [
  "https://as1.ftcdn.net/v2/jpg/04/37/29/40/1000_F_437294024_my7aDYbSa3Gw9B9rpZiRb6a9cuvCZTmC.jpg",
  "https://as1.ftcdn.net/v2/jpg/00/93/94/96/1000_F_93949623_pL3coWSHankhacQWx0eQ0ZvfCwLO7Svn.jpg",
  "https://as2.ftcdn.net/v2/jpg/02/64/10/59/1000_F_264105906_UymEGLUwgoYylQUguwij5pl1EVSjDQGY.jpg",
  "https://as2.ftcdn.net/v2/jpg/03/77/52/59/1000_F_377525995_akONT7bN9GHsGKrrY5LI0PcERLzM5BnW.jpg",
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImage]);

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const handlePrev = () => {
    const nextIndex =
      currentImage - 1 < 0 ? images.length - 1 : currentImage - 1;
    setCurrentImage(nextIndex);
  };

  return (
    <Box
      w={{ lg: "85%", md: "100%", sm: "100%" }}
      margin="auto"
      mb="12"
      mt="-3"
    >
      <Flex
        h={{ lg: "71vh", md: "46vh", sm: "46vh" }}
        direction="column"
        w="100%"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundImage={`url(${images[currentImage]})`}
      >
        <Box>
          <IconButton
            onClick={handlePrev}
            aria-label="Previous Image"
            //icon={<ArrowLeftIcon />}
            colorScheme="gray"
            position="absolute"
            top="50%"
            left={4}
            transform="translateY(-50%)"
            bg="transparent"
            _hover={{ bg: "transparent" }}
          />
          <IconButton
            onClick={handleNext}
            aria-label="Next Image"
            //icon={<ArrowRightIcon />}
            colorScheme="gray"
            position="absolute"
            top="50%"
            right={4}
            transform="translateY(-50%)"
            bg="transparent"
            _hover={{ bg: "transparent" }}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Carousel;
