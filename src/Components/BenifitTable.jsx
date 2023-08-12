import { Table, Thead, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";

function BenifitTable() {
  return (
     <Box borderWidth="1px" borderColor="gray.200" borderRadius="md" overflow="hidden" w="80%" margin={"auto"} mt="10">
    <Table variant="simple" >
      <Thead>
        <Tr>
          <Th>Characteristic</Th>
          <Th>Gir Cow</Th>
          <Th>Hybrid Cow</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Neck</Td>
          <Td>Longer and not too thick with too many skin folds</Td>
          <Td>Doesn't have any folds and is comparatively short in size</Td>
        </Tr>
        <Tr>
          <Td>Hump</Td>
          <Td>Has huge hump at back</Td>
          <Td>Hump is missing</Td>
        </Tr>
        <Tr>
          <Td>Milk Protein</Td>
          <Td>Produces A2 milk which is rich in A2 beta casein protein and good for health</Td>
          <Td>Produces mixture of A1 and A2 beta casein protein, its milk has BCM 7 element which causes lots many diseases like SDS, heart diseases, cancer etc</Td>
        </Tr>
        <Tr>
          <Td>Health</Td>
          <Td>Healthy and less prone to diseases</Td>
          <Td>More vulnerable to diseases</Td>
        </Tr>
        <Tr>
          <Td>Environmental Adaptability</Td>
          <Td>Can adapt to any environmental conditions</Td>
          <Td>Requires heater in cold season and cooler in summer season</Td>
        </Tr>
        <Tr>
          <Td>Calf Production</Td>
          <Td>Can give birth to more than 10-12 calf in its total lifespan</Td>
          <Td>Can give birth to maximum 4 calf</Td>
        </Tr>
        <Tr>
          <Td>Milk Characteristics</Td>
          <Td>Has colostrum that's like “human Mother’s milk” and produces highly nutritive milk</Td>
          <Td>Considered as "Milk Making Machine" and produces milk with low nutritional value</Td>
        </Tr>
        <Tr>
          <Td>Milk Production</Td>
          <Td>Produces on average 6-10 L milk per day</Td>
          <Td>Produces on average 25-30 L milk per day</Td>
        </Tr>
        <Tr>
          <Td>Fodder Consumption</Td>
          <Td>Consumes high amount of fodder, resulting in high maintenance cost</Td>
          <Td>Consumes less fodder and has low maintenance cost</Td>
        </Tr>
      </Tbody>
    </Table>
    </Box>
  );
}

export default BenifitTable;
