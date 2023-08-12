import { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Box,
  Button,
  Heading,
} from "@chakra-ui/react";
import { BsFillEyeFill } from "react-icons/bs";

const customerData = [
  {
    name: "Vishal Jadhav",
    mobile: "7498514749",
    address: "Sangli",
    requirement: "Pure Cow milk",
    customerType: "New",
    time: "6:00 AM",
  },
  {
    name: "Vishal Jadhav",
    mobile: "7498514749",
    address: "Sangli",
    requirement: "Pure Cow milk",
    customerType: "New",
    time: "6:00 AM",
  },
  {
    name: "Vishal Jadhav",
    mobile: "7498514749",
    address: "Sangli",
    requirement: "Pure Cow milk",
    customerType: "New",
    time: "6:00 AM",
  },
  {
    name: "Vishal Jadhav",
    mobile: "7498514749",
    address: "Sangli",
    requirement: "Pure Cow milk",
    customerType: "New",
    time: "6:00 AM",
  },
  {
    name: "Vishal Jadhav",
    mobile: "7498514749",
    address: "Sangli",
    requirement: "Pure Cow milk",
    customerType: "New",
    time: "6:00 AM",
  },{
    name: "Vishal Jadhav",
    mobile: "7498514749",
    address: "Sangli",
    requirement: "Pure Cow milk",
    customerType: "New",
    time: "6:00 AM",
  },
  {
    name: "Vishal Jadhav",
    mobile: "7498514749",
    address: "Sangli",
    requirement: "Pure Cow milk",
    customerType: "New",
    time: "6:00 AM",
  },
  {
    name: "Vishal Jadhav",
    mobile: "7498514749",
    address: "Sangli",
    requirement: "Pure Cow milk",
    customerType: "New",
    time: "6:00 AM",
  },
  {
    name: "Vishal Jadhav",
    mobile: "7498514749",
    address: "Sangli",
    requirement: "Pure Cow milk",
    customerType: "New",
    time: "6:00 AM",
  },
  {
    name: "Vishal Jadhav",
    mobile: "7498514749",
    address: "Sangli",
    requirement: "Pure Cow milk",
    customerType: "New",
    time: "6:00 AM",
  }
];

const CustomerData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(8);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = customerData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(customerData.length / rowsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  return (
    <Box overflowX="auto">
      
      <Table variant="simple" w="80%" margin="auto" rowGap="2vh">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Mobile</Th>
            <Th>Address</Th>
            <Th>Requirement</Th>
            <Th>Customer Type</Th>
            <Th>Time</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentRows.map((customer, index) => (
            <Tr key={index}>
              <Td>{customer.name}</Td>
              <Td>{customer.mobile}</Td>
              <Td>{customer.address}</Td>
              <Td>{customer.requirement}</Td>
              <Td>{customer.customerType}</Td>
              <Td>{customer.time}</Td>
              <Td>
                <Text>
                  <BsFillEyeFill />
                </Text>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Box mt="4" ml="40%">
        <Button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          mr="2"
        >
          Previous
        </Button>
        {pageNumbers.map((number) => (
          <Button
            key={number}
            id={number}
            onClick={handlePageClick}
            variant={number === currentPage ? "solid" : "outline"}
            mr="2"
          >
            {number}
          </Button>
        ))}
        <Button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          ml="2"
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default CustomerData;
