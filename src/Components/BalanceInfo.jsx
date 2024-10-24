import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import HeadSaction from "./HeadSaction";
import ButtonCompo from "./ButtonCompo";

function BalanceInfo() {
  const navigate = useNavigate();

  const handlenext = () => {
    navigate("/");
  };
  const handleNewTransaction = () => {
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
        <HeadSaction title={"Balance Information"} />
        <Typography variant="h6" textAlign={"center"}>
          Your Current Balance : 20000
        </Typography>
        <Box display={"flex"} justifyContent={"center"}>
          <ButtonCompo onClick={handlenext} text="Log Out" />
          <Box pl={1}>
            <ButtonCompo
              type="submit"
              onClick={handleNewTransaction}
              text="Second Transaction"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BalanceInfo;
