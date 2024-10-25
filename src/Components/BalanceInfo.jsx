import { Box, Button, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeadSaction from "./HeadSaction";
import ButtonCompo from "./ButtonCompo";
import { AuthContext } from "../App";
import { addAmountRequest } from "../redux/action/amountAction";
import { useDispatch, useSelector } from "react-redux";

function BalanceInfo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlenext = () => {
    navigate("/");
  };
  const handleNewTransaction = () => {
    navigate("/transactions");
  };
  const { transactionType, atmId } = useContext(AuthContext);
  const customerId = localStorage.getItem("customerId");
  useEffect(() => {
    const obj = {
      customerId: customerId,
      atmId: atmId,
      transactionType: transactionType,
      transactionAmount: 0,
    };
    dispatch(addAmountRequest(obj));
  }, []);

  const balance = useSelector((state) => state.amount.amountData);

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
          {balance}
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
