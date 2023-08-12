import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Blog from "./Blog";
import Footer from "./Footer";
import BenifitTable from "./BenifitTable";
import AboutComponent from "./AboutComponent";

const About = () => {
  return (
    <>
      <Flex
        h={{ lg: "71vh", md: "46vh", sm: "46vh" }}
        direction="column"
        margin={"auto"}
        w="95%"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundImage={`url(https://cdn.shopify.com/s/files/1/0644/5993/1878/t/2/assets/3goaboutuspagebanner-1655098963142.jpg?v=1655098965)`}
      >
        {/* add content here */}
      </Flex>
      <Blog />
      <BenifitTable />

      <Box>
        <AboutComponent />
      </Box>

      <Footer />
    </>
  );
};

export default About;
