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
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [pin, setPin] = useState("");
  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(fetchTransactionRequest());
  }, []);

  const state = useSelector((state) => state.transaction.transactionData);
  const columns = [
    { id: "id", label: "ID", align: "center" },
    { id: "name", label: "Name", align: "left" },
    { id: "age", label: "Age", align: "right" },
    { id: "email", label: "Email", align: "left" },
    { id: "status", label: "Status", align: "center" },
  ];

  const rows = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      email: "john.doe@example.com",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      email: "jane.smith@example.com",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Alice Johnson",
      age: 28,
      email: "alice.johnson@example.com",
      status: "Active",
    },
    {
      id: 4,
      name: "Bob Brown",
      age: 35,
      email: "bob.brown@example.com",
      status: "Pending",
    },
    {
      id: 5,
      name: "Charlie Green",
      age: 22,
      email: "charlie.green@example.com",
      status: "Active",
    },
  ];

  return (
    <div>
      <Box mt={2}>
        <TableData columns={columns} rows={rows} />
      </Box>
    </div>
  );
}

export default ViewMaster(Customer);
