import { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";

function Milk() {
  const [date, setDate] = useState("");
  const [production, setProduction] = useState("");
  const [sell, setSell] = useState("");
  const [wastage, setWastage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can use these state variables to submit the data to your database or API
  };

  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      mt="8"
    >
      <Box flexBasis="50%">
        <Image
          src="https://user-images.githubusercontent.com/101565835/233836414-c438498f-0921-410f-81d4-836620787763.png
          "
          objectFit="contain"
          w="100%"
          h="auto"
          mt="8vh"
        />
      </Box>
      <Box flexBasis="50%">
        <Box maxW="xl" mx="auto" mt="8">
          <Heading as="h1" size="lg" mb="8">
            Milk Production Form
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl id="date" mb="4">
              <FormLabel>Date</FormLabel>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </FormControl>
            <FormControl id="production" mb="6">
              <FormLabel>Production in Liters</FormLabel>
              <Input
                type="number"
                value={production}
                onChange={(e) => setProduction(e.target.value)}
              />
            </FormControl>
            <FormControl id="sell" mb="4">
              <FormLabel>Sell in Liters</FormLabel>
              <Input
                type="number"
                value={sell}
                onChange={(e) => setSell(e.target.value)}
              />
            </FormControl>
            <FormControl id="wastage" mb="4">
              <FormLabel>Wastage in Liters</FormLabel>
              <Input
                type="number"
                value={wastage}
                onChange={(e) => setWastage(e.target.value)}
              />
            </FormControl>
            <Button type="submit" colorScheme="blue">
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

export default Milk;
