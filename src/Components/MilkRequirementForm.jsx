import { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";

function MilkRequirementForm() {
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [address, setAddress] = useState("");
  const [milkRequirement, setMilkRequirement] = useState("");
  const [customerType, setCustomerType] = useState("daily");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can use these state variables to submit the data to your database or API
  };

  return (
    <Flex direction="row" alignItems="center" justifyContent="space-between">
      <Box flexBasis="50%">
        <Image
          src="https://www.modernwebz.com/wp-content/uploads/2020/12/Milk-Dairy-Management.svg"
          objectFit="contain"
          w="100%"
          h="auto"
        />
      </Box>

      <Box flexBasis="50%">
        <Box maxW="xl" mx="auto" mt="8">
        <Heading as="h1" size="lg" mb="8">
            New Customer Form
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl id="name" mb="4">
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id="phone-no" mb="4">
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="tel"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </FormControl>
            <FormControl id="address" mb="4">
              <FormLabel>Address</FormLabel>
              <Input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormControl>
            <FormControl id="milk-requirement" mb="4">
              <FormLabel>Milk Requirement in Liters</FormLabel>
              <Input
                type="number"
                value={milkRequirement}
                onChange={(e) => setMilkRequirement(e.target.value)}
              />
            </FormControl>
            <FormControl id="customer-type" mb="4">
              <FormLabel>Customer Type</FormLabel>
              <Select
                value={customerType}
                onChange={(e) => setCustomerType(e.target.value)}
              >
                <option value="daily">Daily</option>
                <option value="commercial">Commercial</option>
              </Select>
            </FormControl>
            {customerType === "daily" ? (
              <FormControl id="time" mb="4">
                <FormLabel>Time</FormLabel>
                <Select value={time} onChange={(e) => setTime(e.target.value)}>
                  <option value="day">Day</option>
                  <option value="evening">Evening</option>
                </Select>
              </FormControl>
            ) : (
              <FormControl id="date" mb="4">
                <FormLabel>Date</FormLabel>
                <Input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </FormControl>
            )}
            <Button type="submit" colorScheme="blue">
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

export default MilkRequirementForm;
