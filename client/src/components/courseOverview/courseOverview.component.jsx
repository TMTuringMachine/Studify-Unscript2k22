import React from "react";

import {
  CourseOverviewContainer,
  CourseImage,
  CourseData,
} from "./courseOverview.styles";
import { Rating } from "@mui/material";
import { Button } from "@chakra-ui/react";
import {useNavigate} from 'react-router-dom';

const course = {
  name: "Learn Blockchain By Building Your own Javascript",
  author: "Dr. A.B.C",
};

const CourseOverview = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/course/id')
  }  

  return (
    <CourseOverviewContainer>
      <CourseImage url="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" />
      <CourseData>
        <div className="course-name">{course.name}</div>
        <div className="course-author">{course.author}</div>
        <Rating value={5} readOnly />
      <Button width="100%" size="sm" backgroundColor="#6C63FF" color="#fff" _hover="" onClick={handleClick}>VIEW</Button>

      </CourseData>

    </CourseOverviewContainer>
  );
};

export default CourseOverview;
