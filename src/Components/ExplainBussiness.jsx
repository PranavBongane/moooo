import React from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  List,
  ListItem,
  ListIcon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import Footer from "./Footer";

const ExplainBussiness = () => {
  // const milkLiters = 12;
  // const milkCostPerLiter = 80;
  // const cowSpending = 200;
  // const milkIncome = milkLiters * milkCostPerLiter;
  // const totalProfit = milkIncome - cowSpending ;
  // const for10 = totalProfit*10

  const products = [
    {
      name: "Ghee",
      cost: "2500-3000 per kg",
      image:
        "https://www.dairycorner.co.in/wp-content/uploads/2020/07/A2cowghee.jpg",
    },
    {
      name: "Paneer",
      cost: "800 per kg",
      image:
        "https://www.cookwithmanali.com/wp-content/uploads/2013/06/Homemade-Paneer-Easy-Recipe-500x500.jpg",
    },
    {
      name: "Curd",
      cost: "70 per kg",
      image:
        "data:image/jpeg;base64,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",
    },
  ];
  return (
    <>
      <Box p="6">
        <Heading as="h2" size="lg" mb="10vh">
          Our Dairy Business Stages
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing="6">
          <Box>
            <Image
              src="https://c8.alamy.com/comp/KH4GFR/ganpati-temple-sangli-maharashtra-india-asia-KH4GFR.jpg"
              alt="Stage 1"
              mb="4"
            />
            <Heading as="h3" size="md" mb="2">
              Stage 1: City Expansion
            </Heading>
            <Text>
              We start our business in the city with reference customers,
              ensuring a strong foundation for growth and success.
            </Text>
          </Box>
          <Box>
            <Image
              src="https://trak.in/wp-content/uploads/2019/09/Untitled-design-1.jpg"
              alt="Stage 2"
              mb="4"
            />
            <Heading as="h3" size="md" mb="2">
              Stage 2: E-Commerce Expansion
            </Heading>
            <Text>
              We sell our products on e-commerce platforms, expanding our reach
              beyond the city to customers across the State.
            </Text>
          </Box>
          <Box>
            <Image
              src="https://resources.workable.com/wp-content/uploads/2020/09/RO2_Build-the-connections.png"
              alt="Stage 3"
              mb="4"
            />
            <Heading as="h3" size="md" mb="2">
              Stage 3: Expansion with Employees & other farmers
            </Heading>
            <Text>
              We add employees to our team, allowing us to expand our operations
              and reach even more customers with our high-quality dairy
              products.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>

      <Box p="6">
        <Heading as="h2" size="lg" mb="4">
          Dairy Business Startup Expenses
        </Heading>
        <Table variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>Category</Th>
              <Th>Expense</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Animals</Td>
              <Td>700000*10= 700000 </Td>
            </Tr>
            <Tr>
              <Td>Shade for Animals</Td>
              <Td>Rs 150000</Td>
            </Tr>

            <Tr>
              <Td>Equipment for Cow Handling</Td>
              <Td>Rs 50000 </Td>
            </Tr>
            <Tr>
              <Td>Business Running Cost</Td>
              <Td>Rs 200000</Td>
            </Tr>
            <Tr>
              <Td>Total Setup Cost</Td>
              <Td>Rs 1100000</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

      <Box p="6">
        <Heading as="h2" size="lg" mb="4">
          Daily Expenses and Profits
        </Heading>
        <Table variant="striped" colorScheme="gray">
          <Thead>
            <Tr>
              <Th>Category</Th>
              <Th>Expense/Income (Rs)</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Milk Produced Per cow (Liters)</Td>
              <Td>15 </Td>
            </Tr>
            <Tr>
              <Td>Milk Cost per Liter (Rs)</Td>
              <Td>80</Td>
            </Tr>
            <Tr>
              <Td>Cost of Cow's Spending (Rs)</Td>
              <Td>100 Rs</Td>
            </Tr>
            <Tr>
              <Td>Total milk </Td>
              <Td>15*6(Six Cow Milking) =90 Ltr </Td>
            </Tr>
            <Tr>
              <Td>Income from Milk Sales (Rs)</Td>
              <Td> 90* 80 =7200 Rs </Td>
            </Tr>
            <Tr>
              <Td>Net income for day </Td>
              <Td> 7200- 1000(Cow spending) =6200 Rs </Td>
            </Tr>
            <Tr>
              <Td>Total Profit for 1 Month (Rs)</Td>
              <Td>6200 * 30 = 186000</Td>
            </Tr>

            <Tr>
              <Td>Bussiness error and other expense - 26000 (Rs)</Td>
              <Td>160000 Rs (6 Cow )</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

      <Box p="6">
        <Heading as="h2" size="lg" mb="4">
          Product and Costs
        </Heading>
        <Table variant="striped" colorScheme="gray">
          <TableCaption>
            Here is a list of our dairy products and their respective costs.
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Cost (Rs)</Th>
              <Th>Image</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product, index) => (
              <Tr key={index}>
                <Td>{product.name}</Td>
                <Td>{product.cost}</Td>
                <Td>
                  <Image
                    src={product.image}
                    alt={product.name}
                    boxSize="100px"
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      
    </>
  );
};

export default ExplainBussiness;
