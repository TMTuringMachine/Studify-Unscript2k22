import React from "react";

import { MyCoureseContainer } from "./myCourses.styles";

import CourseOverview from "../../components/courseOverview/courseOverview.component";
import { SimpleGrid, GridItem,Text } from "@chakra-ui/react";


const MyCourses = () => {
  return (
    <MyCoureseContainer>
      <Text fontSize="2xl" fontWeight="600" margin="50px 0px 0px 0px">
        COURSES YOU HAVE PURCHASED:
      </Text>
      <SimpleGrid
        columns={[2, 2, 3, 4, 5]}
        spacing={["10px", "20px", "25px", "25px", "30px"]}
        width="100%"
        margin="20px auto 20px auto"
      >
        <GridItem>
          <CourseOverview />
        </GridItem>
        <GridItem>
          <CourseOverview />
        </GridItem>
        <GridItem>
          <CourseOverview />
        </GridItem>
       
      </SimpleGrid>
    </MyCoureseContainer>
  );
};

export default MyCourses;
