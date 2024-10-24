import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HeadSaction from "./HeadSaction";
import ButtonCompo from "./ButtonCompo";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/transactions");
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
        <HeadSaction title={"Welcome to the ATM"} />
        <Box display={"flex"} justifyContent={"center"}>
          <ButtonCompo onClick={handleClick} text="Start" />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
