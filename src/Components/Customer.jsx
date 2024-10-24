import React, { useEffect, useState } from "react";
import { Button, Modal, Box, TextField, Typography } from "@mui/material";
import InputField from "./InputField";
import axios from "axios";
import TableData from "./TableData";
import { ViewMaster } from "../ViewMaster";
import { useDispatch } from "react-redux";
import { fetchCustomerRequest } from "../redux/action/customerAction";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      firstName,
      lastName,
      mobileNo,
      pin,
      role: "CUSTOMER",
      balance: 10000,
    };
    try {
      const response = await axios.post(
        `http://localhost:8080/user/signup`,
        obj
      );
      if (response.status === 200) {
        handleClose();
        setCustomerName("");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    dispatch(fetchCustomerRequest());
  }, []);
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
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add Customer
      </Button>
      <Box mt={2}>
        <TableData columns={columns} rows={rows} />
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2" gutterBottom>
            Add New Customer
          </Typography>
          <form onSubmit={handleSubmit}>
            <InputField
              label="First Name"
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <InputField
              label="Last Name"
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <InputField
              label="Mobile Number"
              fullWidth
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              required
            />
            <InputField
              label="Pin"
              fullWidth
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              required
            />

            <Box display="flex" justifyContent="space-between" mt={2}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleClose}
              >
                Close
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default ViewMaster(Customer);
