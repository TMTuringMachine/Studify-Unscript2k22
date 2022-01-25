import React, { useEffect, useState } from "react";

import { MyCoureseContainer } from "./myCourses.styles";

import CourseOverview from "../../components/courseOverview/courseOverview.component";
import { SimpleGrid, GridItem, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Button } from "@chakra-ui/button";

import { Link } from "react-router-dom";
const MyCourses = () => {
  const user = useSelector((store) => store.auth.user);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    setCourses(user.myEnrolledCourses);
    console.log(user.myEnrolledCourses);
  }, []);

  return (
    <MyCoureseContainer>
      {courses.length == 0 ? (
        <Text fontSize="2xl" fontWeight="600" margin="50px 0px 0px 0px">
          YOU HAVE NOT PURCHASED ANY COURSE FIND SOME HERE <br />
          <Button
            color="white"
            _hover={{ bg: "#a6a0ff" }}
            backgroundColor="#6c63ff"
          >
            <Link to="/home">Browse Courses</Link>
          </Button>
        </Text>
      ) : (
        <>
          <Text fontSize="2xl" fontWeight="600" margin="50px 0px 0px 0px">
            COURSES YOU HAVE PURCHASED:
          </Text>
          <SimpleGrid
            columns={[2, 2, 3, 4, 5]}
            spacing={["10px", "20px", "25px", "25px", "30px"]}
            width="100%"
            margin="20px auto 20px auto"
          >
            {courses.map((cour) => {
              console.log(cour);
              return (
                <GridItem>
                  <CourseOverview course={cour.courseID} />
                </GridItem>
              );
            })}
          </SimpleGrid>
        </>
      )}
    </MyCoureseContainer>
  );
};

export default MyCourses;
