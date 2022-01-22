import axios from "../utils/axios";
import Alert from "../components/Alert/Alert.component";
import { loginSuccess } from "../redux/slices/auth";
export const SignupHandler = async (formData) => {
  try {
    const body = JSON.stringify(formData);
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const res = await axios.post("/signup", body, config);
    console.log(res);
  } catch (e) {
    console.log(e);
  }
};

export const LoginHandler = async (formData, dispatch, isAdmin) => {
  const body = JSON.stringify(formData);
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  if (isAdmin) {
    var res = await axios.post("/admin/login", body, config);
  } else {
    var res = await axios.post("/login", body, config);
  }
  console.log(res);
  if (res.data.ok) {
    if (isAdmin) {
      var user = res.data.AdminLogin;
    } else {
      var user = res.data.userLogin;
    }

    console.log(user);
    dispatch(loginSuccess(user));
    const obj = {
      dataMessage: res?.data?.message,
      error: undefined,
    };
    return obj;
  } else {
    const obj = {
      dataMessage: undefined,
      error: res?.data?.message,
    };
    return obj;
  }
};
