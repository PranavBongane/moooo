import React from "react";
import MilkChart from "./MilkChart";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import FodderChart from "./FodderChart";
import CustomersChart from "./CustomerChart";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <SimpleGrid
        spacing={45}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        <Card boxShadow={"lg"}>
          <CardHeader>
            <Heading size="md"> Customer Data</Heading>
          </CardHeader>
          <CardBody>
            <Text>View a summary of all your customers .</Text>
          </CardBody>
          <CardFooter>
            <Link to="/customerdata">
              <Button>View here</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card boxShadow={"lg"}>
          <CardHeader>
            <Heading size="md"> Fodder Data</Heading>
          </CardHeader>
          <CardBody>
            <Text>View a summary of all Fodder data.</Text>
          </CardBody>
          <CardFooter>
            <Link to="fodderdata">
              <Button>View here</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card boxShadow={"lg"}>
          <CardHeader>
            <Heading size="md"> Milk Data</Heading>
          </CardHeader>
          <CardBody>
            <Text>View a summary of all Milk data.</Text>
          </CardBody>
          <CardFooter>
            <Link to="milkdata">
              {" "}
              <Button>View here</Button>
            </Link>
          </CardFooter>
        </Card>
        <Card boxShadow={"lg"}>
          <CardHeader>
            <Heading size="md"> Animal Health </Heading>
          </CardHeader>
          <CardBody>
            <Text>View a summary of all Health data of animal.</Text>
          </CardBody>
          <CardFooter>
            <Link to="animaldata">
              {" "}
              <Button>View here</Button>
            </Link>
          </CardFooter>
        </Card>
      </SimpleGrid>

      <Grid templateColumns="repeat(2, 1fr)" gap={6} mt="5">
        <GridItem>
          <Box boxShadow={"lg"} p="2">
            <Heading size="md">Milk Production</Heading>
            <MilkChart />
          </Box>
        </GridItem>
        <GridItem>
          <Box boxShadow={"lg"} p="2">
            <Heading size="md">Fodder Data</Heading>
            <FodderChart />
          </Box>
        </GridItem>
        <GridItem>
          <Box boxShadow={"lg"} p="2">
            <Heading size="md">Customer Data</Heading>

            <CustomersChart />
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
