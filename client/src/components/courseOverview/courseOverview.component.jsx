import React from "react";

import {
  CourseOverviewContainer,
  CourseImage,
  CourseData,
} from "./courseOverview.styles";
import { Rating } from "@mui/material";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const course = {
  name: "Learn Blockchain By Building Your own Javascript",
  author: "Dr. A.B.C",
};

const CourseOverview = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/course/id");
  };
  console.log(props.course);
  return (
    <CourseOverviewContainer>
      <CourseImage url={props.course.thumbnail} />
      <CourseData>
        <div className="course-name">{props.course.title}</div>
        <div className="course-author">{props.course.teacherName}</div>
        <Rating value={5} readOnly />
        <div>Price:{props.course.price}</div>
        <Button
          width="100%"
          size="sm"
          backgroundColor="#6C63FF"
          color="#fff"
          _hover=""
          onClick={handleClick}
        >
          VIEW
        </Button>
      </CourseData>
    </CourseOverviewContainer>
  );
};

export default CourseOverview;
