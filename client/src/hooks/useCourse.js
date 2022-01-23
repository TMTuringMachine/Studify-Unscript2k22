import axios from "../utils/axios";
import { initializeUser } from "./useAuth";

export const verifyTeacherHook = async (dispatch, data) => {
  const body = JSON.stringify(data);
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const res = await axios.post("/user/uploadTeacherData", body, config);
  dispatch(initializeUser(dispatch));
  console.log(res);
};

export const postCourse = async (dispatch, data, navigate) => {
  const body = JSON.stringify(data);
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const res = await axios.post("/course/create", body, config);
  const newCourse = res.data.NewCourse;
  navigate(`/course/${res?.data?.NewCourse?._id}`, {
    state: { course: newCourse },
  });
  console.log(res);
};

export const getCourse = async (dispatch, id) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  console.log(id, "this is id");

  const response = await axios.get(`/course/get/${id}`, config);
  if (response.data) {
    return response.data?.course;
  }
  return null;
};

export const updateCourse = async (data) => {
  const body = JSON.stringify(data);
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const res = await axios.post("/course/update", body, config);
  console.log(res);
};


export const addDoubt = async (data,courseId) => {
  const body = JSON.stringify(data);
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const response = await axios.post(`/course/${courseId}/doubt`,body,config);
  console.log(response);
}
export const deleteCourse = async (courseId, navigate) => {
  try {
    const res = await axios.get(`/course/delete/${courseId}`);
    console.log(res);
    navigate("/home");
  } catch (e) {
    console.log(e);
  }
};