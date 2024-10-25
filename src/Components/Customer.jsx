import React, { useEffect, useState } from "react";
import { Button, Modal, Box, TextField, Typography } from "@mui/material";
import InputField from "./InputField";
import axios from "axios";
import TableData from "./TableData";
import { ViewMaster } from "../ViewMaster";
import { useDispatch, useSelector } from "react-redux";
import { fetchCustomerRequest } from "../redux/action/customerAction";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
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
  const customers = useSelector((state) => state.customer.customerData);
  const columns = [
    // { id: "id", label: "ID", align: "center" },
    { id: "firstName", label: "First Name", align: "center" },
    { id: "lastName", label: "Last Name", align: "center" },
    { id: "balance", label: "Balance", align: "center" },
    { id: "mobileNo", label: "Mobile No", align: "center" },
    // { id: "status", label: "Status", align: "center" },
  ];

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add Customer
      </Button>
      <Box mt={2}>
        <TableData columns={columns} rows={customers} />
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2" gutterBottom>
            Add New Customer
          </Typography>
          <form onSubmit={handleSubmit}>
            <InputField
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <InputField
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <InputField
              label="Mobile Number"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              required
            />
            <InputField
              label="Pin"
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
