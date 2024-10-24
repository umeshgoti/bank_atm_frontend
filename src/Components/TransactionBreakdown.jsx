import React, { useContext } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
import HeadSaction from "./HeadSaction";
import ButtonCompo from "./ButtonCompo";

const TransactionBreakdown = () => {
  const navigate = useNavigate();
  const { setTransactionType, atmId } = useContext(AuthContext);
  const handleTransactionClick = (value) => {
    setTransactionType(value);
    navigate("/login");
  };

  const transactions = ["DEPOSIT", "WITHDRAW", "BALANCE_INQUIRY"];

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
        <HeadSaction title={"Transaction Breakdown"} />
        <Grid container spacing={2}>
          {transactions.map((transaction, index) => (
            <Grid item xs={6} key={index}>
              {" "}
              <ButtonCompo
                onClick={() => handleTransactionClick(transaction)}
                text={transaction}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TransactionBreakdown;
