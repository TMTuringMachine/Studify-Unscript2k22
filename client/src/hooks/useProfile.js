import axios from "../utils/axios";
import { profileUpdate } from "../redux/slices/auth";
export const CreateProfileHook = async (data, dispatch, navigate) => {
  try {
    const body = JSON.stringify(data);
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const res = await axios.post("/user/uploadData", body, config);
    dispatch(profileUpdate(res));
    console.log(res)
    navigate("/dashboard");
  } catch (e) {}
};
