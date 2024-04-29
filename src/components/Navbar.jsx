import React from 'react';
import { Box, Flex, Spacer, Heading } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="gray.100">
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>Todo App</Heading>
      </Flex>
      <Spacer />
      <Box>
        {/* Add navigation links here */}
      </Box>
    </Flex>
  );
};

export default Navbar;