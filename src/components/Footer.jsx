import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" mt={8} py={4} bg="gray.100" textAlign="center">
      <Text>© 2023 Todo App. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;