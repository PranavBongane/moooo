import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { FcFactory, FcHome } from "react-icons/fc";
import { ReactElement } from "react";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function HomeComp() {
  return (
    <Container maxW={"6xl"} py={12} mb="5">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Aim
          </Text>
          <Heading>Provide health with milk products</Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
          May All Be Healthy
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={<FcHome />}
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Home"}
            />
            <Feature
              icon={<FcFactory />}
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"Business"}
            />
            <Feature
              icon={<FcFactory />}
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"Factories"}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={"lg"}
            alt={"feature image"}
          
            src={
              "https://cdn.shopify.com/s/files/1/0644/5993/1878/t/2/assets/3goaboutuspagebanner-1655098963142.jpg?v=1655098965"
            }
            objectFit={"fill"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
