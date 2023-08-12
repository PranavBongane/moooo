import { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";

function FodderForm() {
  const [date, setDate] = useState("");
  const [fooderType, setFooderType] = useState("");
  const [fodderInKg, setFodderInKg] = useState("");
  const [wastageOfFodder, setWastageOfFodder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can use these state variables to submit the data to your database or API
  };

  return (
    <Flex direction="row" alignItems="center" justifyContent="space-between">
      <Box flexBasis="50%">
        <Image
          src="https://user-images.githubusercontent.com/101565835/234661910-85d68c7c-6448-47b7-9ffe-290d06b4db82.png
          "
          objectFit="contain"
          w="100%"
          h="auto"
          mt="10vh"
        />
      </Box>
      <Box flexBasis="50%">
        <Box maxW="xl" mx="auto" mt="8">
          <Heading as="h1" size="lg" mb="8">
            Fodder Management
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
            <FormControl id="fooder-type" mb="4">
              <FormLabel>Fooder Type</FormLabel>
              <Select
                value={fooderType}
                onChange={(e) => setFooderType(e.target.value)}
              >
                <option value="green-grass">Green Grass</option>
                <option value="sugarcane">Sugarcane</option>
                <option value="brown-grass">Brown Grass</option>
              </Select>
            </FormControl>
            <FormControl id="fodder-in-kg" mb="4">
              <FormLabel>Fodder in Kg</FormLabel>
              <Input
                type="number"
                value={fodderInKg}
                onChange={(e) => setFodderInKg(e.target.value)}
              />
            </FormControl>
            <FormControl id="wastage-of-fodder" mb="4">
              <FormLabel>Wastage of Fodder in Kg</FormLabel>
              <Input
                type="number"
                value={wastageOfFodder}
                onChange={(e) => setWastageOfFodder(e.target.value)}
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

export default FodderForm;
