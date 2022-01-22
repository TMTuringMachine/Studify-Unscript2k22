import { Button } from "@mui/material";
import React from "react";
// import 

const Test = () => {
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
  const handlePayment = () => {

  }
  return (
    <div>
      <Button onClick={showWidget}>UPLOAD FILES</Button>
      <Button onClick={handlePayment}>Buy Course</Button>
    </div>
  );
};

export default Test;
