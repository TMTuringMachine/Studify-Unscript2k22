import { Button } from "@mui/material";
import React from "react";
import API from "../utils/axios";
import useRazorpay, { RazorpayOptions } from "react-razorpay";

const Test = () => {
  const Razorpay = useRazorpay();
  const showWidget = () => {
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: `dx1ye2bro`,
        uploadPreset: `kp2gvmnk`,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log(result.info.url);
        }
      }
    );
    widget.open();
  };

  const createOrder = async (amount) => {
    const res = await API.post("/user/buyCourse/createorder", { amount });
    return res;
  };

  const handlePayment = async () => {
    let order = await createOrder(200 * 100);
    order = order.data.razorRes;
    console.log(order);
    var options = {
      key: "rzp_test_7o3KFikLV8ENjP", // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: order.currency,
      name: "Studify",
      description: "Test Transaction",
      // "image": "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:3000/user/razor/callback",
      // "prefill": {
      //     "name": "Gaurav Kumar",
      //     "email": "gaurav.kumar@example.com",
      //     "contact": "9999999999"
      // },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#6c63ff",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
    // document.getElementById('rzp-button1').onclick = function(e){
    //     rzp1.open();
    //     e.preventDefault();
    // }
  };
  return (
    <div>
      <Button onClick={showWidget}>UPLOAD FILES</Button>
      <Button onClick={handlePayment}>Buy Course</Button>
    </div>
  );
};

export default Test;
