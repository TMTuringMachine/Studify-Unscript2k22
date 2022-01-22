import React from 'react';
import { SimpleGrid ,Box} from '@chakra-ui/react';

import {CourseContainer,CourseImage} from './course.styles';

const Course = () => {
  return <CourseContainer>
      <SimpleGrid columns={2}>
        <Box>
            here will be the image
        </Box>
        <Box>
            here will be the data
        </Box>
      </SimpleGrid>
  </CourseContainer>;
};

export default Course;
