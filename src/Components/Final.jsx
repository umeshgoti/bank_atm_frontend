import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import HeadSaction from "./HeadSaction";
import ButtonCompo from "./ButtonCompo";

function Final() {
  const navigate = useNavigate();

  const handlenext = () => {
    navigate("/");
  };
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height="100vh"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "30%",
          padding: 2,
          borderRadius: 5,
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#f5f5f5",
        }}
      >
        <HeadSaction title={"Final Meassge"} />
        <Box display={"flex"} justifyContent={"center"}>
          <ButtonCompo type="submit" onClick={handlenext} text="Log Out" />
        </Box>
      </Box>
    </Box>
  );
}

export default Final;