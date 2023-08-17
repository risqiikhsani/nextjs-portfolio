"use client";

import { TypeAnimation } from "react-type-animation";
import { Typography } from "@mui/material";
import React from "react";

export default function Welcome() {
  const [textColor, setTextColor] = React.useState("yellow");

  return (
    <>
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",  
          color: textColor,
          /* when working without ref and classNames, the manipulated style needs to be
         applied to the parent element, because the TypeAnimation component is perma-memoized */
        }}
      >
        <TypeAnimation
          sequence={[
            "Welcome",
            800,
            () => setTextColor("aqua"),
            "Welcome to",
            800,
            () => setTextColor("white"),
            "Welcome to My Portfolio",
            1000,
            () => setTextColor("darkkhaki"),
            "",
          ]}
          repeat={Infinity}
        />
      </Typography>
    </>
  );
}
