"use client";

import { Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";


    



 
    


export default function Code() {
  return (
    <>
    <Typography variant="h5" sx={{fontWeight:'bold'}}>
      <TypeAnimation
        style={{ whiteSpace: "pre-line", display: "block" }}
        sequence={[
        `const his_tech_passion = [\n"🚀 Full-Stack Developer",\n"🎨 Front-End Enthusiast",\n"🕹️ Game Development Enthusiast"\n"⚙️ Back-End Wizard",\n"🛠️ DevOps Magician",\n];\n

        const his_other_passion = [\n"🐱 Cat Lover Extraordinaire 🐾",\n"🏞️ Nature Explorer and Enthusiast 🌳"\n];`,
          1000,
          "",
        ]}
        deletionSpeed={99}
        repeat={Infinity}
      />
    </Typography>
    </>
  );
}
