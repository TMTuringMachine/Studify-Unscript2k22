import axios from "../utils/axios";
import Alert from "../components/Alert/Alert.component";
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

export const LoginHandler = async (formData) => {
  const body = JSON.stringify(formData);
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const res = await axios.post("/login", body, config);
  console.log(res);
  if (res.data.ok) {
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
