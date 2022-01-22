import React from "react";

import {
  CourseOverviewContainer,
  CourseImage,
  CourseData,
} from "./courseOverview.styles";
import { Rating } from "@mui/material";
import { Button } from "@chakra-ui/react";

const course = {
  name: "Learn Blockchain By Building Your own Javascript",
  author: "Dr. A.B.C",
};

const CourseOverview = (props) => {
  console.log(props.course)
  return (
    <CourseOverviewContainer>
      <CourseImage url={props.course.thumbnail} />
      <CourseData>
        <div className="course-name">{props.course.title}</div>
        <div className="course-author">{props.course.teacherName}</div>
        <Rating value={5} readOnly />
        <div>Price:{props.course.price}</div>
      <Button width="100%" size="sm" backgroundColor="#6C63FF" color="#fff" _hover="">VIEW</Button>

      </CourseData>

    </CourseOverviewContainer>
  );
};

export default CourseOverview;
