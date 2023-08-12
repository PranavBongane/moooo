import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Textarea,
  Flex,
  Image,
  Heading,
} from "@chakra-ui/react";
import Navbar from "./Navbar";

function CowHealthForm() {
  const [formData, setFormData] = useState({
    cowName: "",
    bodyConditionScore: "",
    appetite: "",
    milkProduction: "",
    behavior: "",
    respiratoryRate: "",
    temperature: "",
    heartRate: "",
    fecalConsistency: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // call a function to submit the form data to your backend
    console.log(formData);
  };

  return (
    <>
      <Flex direction="row" alignItems="center" justifyContent="space-between">
        <Box flexBasis="50%">
          <Image
            src="https://user-images.githubusercontent.com/101565835/233836938-c552c3bc-c067-4070-8d34-24f6935a8c8e.png
            "
            objectFit="contain"
            w="100%"
            h="auto"
            mt="-9vh"
            ml="1vh"
          />
        </Box>
        <Box flexBasis="50%">
          <Box maxW="xl" mx="auto" mt="8">
            <Heading as="h1" size="lg" mb="8">
              Cow Health Form
            </Heading>
            <form onSubmit={handleSubmit}>
              <FormControl id="cowName" isRequired>
                <FormLabel>Cow Name</FormLabel>
                <Input
                  name="cowName"
                  placeholder="Enter cow name"
                  value={formData.cowName}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl id="bodyConditionScore" isRequired>
                <FormLabel>Body Condition Score</FormLabel>
                <Select
                  name="bodyConditionScore"
                  placeholder="Select body condition score"
                  value={formData.bodyConditionScore}
                  onChange={handleInputChange}
                >
                  <option value="1">1 (very thin)</option>
                  <option value="2">2 (thin)</option>
                  <option value="3">3 (ideal)</option>
                  <option value="4">4 (overweight)</option>
                  <option value="5">5 (obese)</option>
                </Select>
              </FormControl>

              <FormControl id="appetite" isRequired>
                <FormLabel>Appetite</FormLabel>
                <Input
                  name="appetite"
                  placeholder="Enter appetite status"
                  value={formData.appetite}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl id="milkProduction" isRequired>
                <FormLabel>Milk Production</FormLabel>
                <Input
                  name="milkProduction"
                  placeholder="Enter milk production"
                  value={formData.milkProduction}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl id="behavior" isRequired>
                <FormLabel>Behavior</FormLabel>
                <Input
                  name="behavior"
                  placeholder="Enter behavior status"
                  value={formData.behavior}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl id="respiratoryRate" isRequired>
                <FormLabel>Respiratory Rate</FormLabel>
                <Input
                  name="respiratoryRate"
                  placeholder="Enter respiratory rate"
                  value={formData.respiratoryRate}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl id="temperature" isRequired>
                <FormLabel>Temperature</FormLabel>
                <Input
                  name="temperature"
                  placeholder="Enter temperature"
                  value={formData.temperature}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl id="heartRate" isRequired>
                <FormLabel>Heart Rate</FormLabel>
                <Input
                  name="heartRate"
                  placeholder="Enter heart rate"
                  value={formData.temperature}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl id="heartRate" isRequired>
                <FormLabel>fecalConsistency</FormLabel>
                <Input
                  name=" fecalConsistency"
                  placeholder="Enter  fecalConsistency"
                  value={formData.fecalConsistency}
                  onChange={handleInputChange}
                />
              </FormControl>
              <Button type="submit" colorScheme="blue" mt="2">
                Submit
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
export default CowHealthForm;
