import { ReactElement } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { FcDonate, FcHome, FcCloseUpMode } from "react-icons/fc";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function DeleveryComp() {
  return (
    <Box p={4} w="80%" margin="auto" mb="8">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcCloseUpMode} w={10} h={10} />}
          title={"Organic and fresh"}
          text={
            "Organic milk has been found to have higher concentrations of nutritional minerals and antioxidants – like iron, vitamin E, selenium, and carotenoids – than non-organic milk."
          }
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={"Monthly subscription"}
          text={
            "We provide Milk in Monthly subscription basis also you can be our subscriber"
          }
        />
        <Feature
          icon={<Icon as={FcHome} w={10} h={10} />}
          title={"Instant Delivery"}
          text={
            "We deliver milk at morning and evening to your doorstep"
          }
        />
      </SimpleGrid>
    </Box>
  );
}
