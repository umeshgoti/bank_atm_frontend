import React, { useEffect, useState } from "react";
import { Button, Modal, Box, TextField, Typography } from "@mui/material";
import InputField from "./InputField";
import axios from "axios";
import TableData from "./TableData";
import { ViewMaster } from "../ViewMaster";
import { fetchTransactionRequest } from "../redux/action/transactionAction";
import { useDispatch, useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function Customer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactionRequest());
  }, []);

  const transaction = useSelector((state) => state.transaction.transactionData);
  const columns = [
    { id: "id", label: "Transaction ID", align: "center" },
    { id: "customerName", label: "Customer Name", align: "left" },
    { id: "atmLocation", label: "ATM Location", align: "left" },
    { id: "time", label: "Transaction Time", align: "left" },
    { id: "transactionAmount", label: "Amount", align: "right" },
    { id: "transactionType", label: "Type", align: "center" },
    { id: "status", label: "Status", align: "center" },
  ];

  return (
    <div>
      <Box mt={2}>
        <TableData columns={columns} rows={transaction} />
      </Box>
    </div>
  );
}

export default ViewMaster(Customer);
