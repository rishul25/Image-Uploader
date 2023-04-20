import { Box, Image, Text, VStack } from '@chakra-ui/react';
import Posts from './Posts';

const Profile = () => {
  return (
    <Box>
      <VStack p={7} m="auto" width="fit-content" borderRadius={6} bg="gray.700">
        <Image
          borderRadius="full"
          boxSize="80px"
          src="https://1.bp.blogspot.com/-yEmMsFav7SU/XHydmyOL3UI/AAAAAAAAQq0/J4xn-IH0QnQV9ckMae0GRgLcKyTf3Ma8ACK4BGAYYCw/s1600/File%2B%2526%2BImage%2BUploader.png"
          alt="Profile"
        />
        <Text>Image Uploader</Text>
        
      </VStack>

      <Posts />
    </Box>
  );
};
export default Profile;
