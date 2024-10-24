import React, { useEffect, useState } from "react";
import { Button, Modal, Box, TextField, Typography } from "@mui/material";
import InputField from "./InputField";
import axios from "axios";
import TableData from "./TableData";
import { ViewMaster } from "../ViewMaster";
import { useDispatch } from "react-redux";
import { addAtmRequest, fetchAtmRequest } from "../redux/action/atmAction";
import Api from "../api";
import Swal from "sweetalert2";

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

function Atm() {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [pin, setPin] = useState("");
  const dispatch = useDispatch();
  const api = new Api();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      locationName: firstName,
      welcomeMessage: lastName,
      amount: mobileNo,
      isActive: true,
    };
    api
      .postAPI(`api/atm`, obj, token)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: "Error create order data, please contact to support...!",
          icon: "error",
        });
      });
  };

  useEffect(() => {
    console.log("called");
    dispatch(fetchAtmRequest());
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
        Add Atm
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
              label="Location Name"
              fullWidth
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <InputField
              label="Welcome Meassge"
              fullWidth
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <InputField
              label="Amount"
              fullWidth
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              required
            />
            {/* <InputField
              label="Pin"
              fullWidth
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              required
            /> */}

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

export default ViewMaster(Atm);
