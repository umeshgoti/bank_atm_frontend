import { Typography } from "@mui/material";
import React from "react";

function HeadSaction({ title }) {
  return (
    <Typography
      variant="h4"
      textAlign="center"
      sx={{
        background:
          "linear-gradient(90deg, rgba(255,0,150,1) 0%, rgba(0,204,255,1) 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {title}
    </Typography>
  );
}

export default HeadSaction;
