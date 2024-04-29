import { Box, Flex, Heading, Text, Image, SimpleGrid, Link } from '@chakra-ui/react';
import { FaCalendarAlt, FaTrophy, FaImage } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center" mb={10}>
        <Image borderRadius="full" boxSize="150px" src="/images/venus-williams.jpg" alt="Venus Williams" />
        <Heading as="h1" size="xl" mt={5}>Venus Williams</Heading>
        <Text fontSize="lg">Professional Tennis Player</Text>
      </Flex>
      <SimpleGrid columns={2} spacing={10}>
        <Box as="section">
          <Heading as="h2" size="lg" mb={3}><FaTrophy /> Career Achievements</Heading>
          <Text>
            Venus Williams has won seven Grand Slam singles titles, five at Wimbledon and two at the US Open.
          </Text>
        </Box>
        <Box as="section">
          <Heading as="h2" size="lg" mb={3}><FaCalendarAlt /> Upcoming Events</Heading>
          <Text>
            Check back soon for updates on upcoming tournaments and events.
          </Text>
        </Box>
        <Box as="section">
          <Heading as="h2" size="lg" mb={3}><FaImage /> Gallery</Heading>
          <Link href="/gallery" color="teal.500">Visit the Gallery</Link>
        </Box>
        <Box as="section">
          <Heading as="h2" size="lg" mb={3}>Biography</Heading>
          <Text>
            Born on June 17, 1980, Venus Williams has been a professional tennis player since 1994.
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Index;