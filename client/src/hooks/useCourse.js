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
