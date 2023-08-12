import React from 'react';
import { Box, Image, Heading, Text, Link, Button } from '@chakra-ui/react';
import Footer from './Footer';

const ProductCard = ({ name, price, description, link }) => {
  return (
    <Box
      bg='white'
      shadow='sm'
      rounded='md'
      overflow='hidden'
      p='4'
      transition='all 0.2s ease-in-out'
      _hover={{ shadow: 'md' }}
    >
      <Image src={link} alt={name} />
      <Heading as='h3' size='md' my='2'>
        {name}
      </Heading>
      <Text fontSize='lg' fontWeight='bold' color='blue.500'>
        Rs{price}
      </Text>
      <Text fontSize='sm' color='gray.500' my='2'>
        {description}
      </Text>
      <Button bgColor={"#144950"} color={"white"}>View Product</Button>
      
    </Box>
  );
};

const products = [
  {
    name: 'Ghee',
    price: 3000,
    description: 'This is a short description of product ',
    link: "https://www.dairycorner.co.in/wp-content/uploads/2020/07/A2cowghee.jpg",
  },
  {
    name: 'Milk',
    price: 120,
    description: 'This is a short description of product ',
    link: "https://cdn.shopify.com/s/files/1/0644/5993/1878/products/a2-gir-cow-milk-1-litreday-716607.jpg?v=1673547660",
  },
  {
    name: 'Paneer',
    price: 800,
    description: 'This is a short description of product ',
    link: "https://www.cookwithmanali.com/wp-content/uploads/2013/06/Homemade-Paneer-Easy-Recipe-500x500.jpg",
  },
  {
    name: 'Curd',
    price: 100,
    description: 'This is a short description of product ',
    link: "https://5.imimg.com/data5/CK/IX/MY-43917690/fresh-curd-500x500.png",
  },
  {
    name: 'Butter',
    price: 10,
    description: 'This is a short description of product ',
    link: "https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthiest-cheese-1296x728-swiss.jpg",
  },
  {
    name: 'Ghee',
    price: 10,
    description: 'This is a short description of product ',
    link: "https://www.dairycorner.co.in/wp-content/uploads/2020/07/A2cowghee.jpg",
  },
  {
    name: 'Product 1',
    price: 10,
    description: 'This is a short description of product ',
    link: "https://cdn.shopify.com/s/files/1/0644/5993/1878/products/a2-gir-cow-milk-1-litreday-716607.jpg?v=1673547660",
  },
  {
    name: 'Product 1',
    price: 10,
    description: 'This is a short description of product ',
    link: "https://www.cookwithmanali.com/wp-content/uploads/2013/06/Homemade-Paneer-Easy-Recipe-500x500.jpg",
  },
  {
    name: 'Product 1',
    price: 100,
    description: 'This is a short description of product ',
    link: "https://5.imimg.com/data5/CK/IX/MY-43917690/fresh-curd-500x500.png",
  },
  
 
  // Add more products here
];

    
    
    
    
const ProductList = () => {
  return (
    <>
    <Box
      display='grid'
      gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr']}
      gridGap='6'
      ml="11vh"
      
    >
      {products.map((product) => (
        <ProductCard key={product.name} {...product} />
      ))}
    </Box>
    <Footer/>
   </>
  );
};

export default ProductList;
