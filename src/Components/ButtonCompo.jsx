import { Box, Button } from "@mui/material";
import React from "react";

function ButtonCompo({ onClick, text, type }) {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Button
        type={type}
        variant="contained"
        onClick={onClick}
        color="secondary"
        sx={{
          width: "100%",
          height: "50px",
          "&:hover": {
            backgroundColor: "#50165a",
          },
        }}
      >
        {text}
      </Button>
    </Box>
  );
}

export default ButtonCompo;
