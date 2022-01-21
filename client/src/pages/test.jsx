import { Button } from "@mui/material";
import React from "react";

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
  return (
    <div>
      <Button onClick={showWidget}>UPLOAD FILES</Button>
    </div>
  );
};

export default Test;
