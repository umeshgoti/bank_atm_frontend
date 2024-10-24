import React, { useEffect, useState } from "react";
import { Button, Modal, Box, TextField, Typography } from "@mui/material";
import InputField from "./InputField";
import TableData from "./TableData";
import { ViewMaster } from "../ViewMaster";
import { useDispatch, useSelector } from "react-redux";
import { addAtmRequest, fetchAtmRequest } from "../redux/action/atmAction";
import Api from "../api";

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
  const [locationName, setLocationName] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [amount, setAmount] = useState("");
  const dispatch = useDispatch();
  const api = new Api();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      locationName,
      welcomeMessage,
      amount,
      isActive: true,
    };
    dispatch(addAtmRequest(obj));
    handleClose();
    setLocationName("");
    setWelcomeMessage("");
    setAmount("");
  };

  const AtmData = useSelector((state) => state.atm.atmData);
  const columns = [
    { id: "locationName", label: "Location Name", align: "left" },
    { id: "welcomeMessage", label: "Welcome Message", align: "left" },
    { id: "amount", label: "Amount", align: "right" },
    { id: "active", label: "Active", align: "center" },
  ];

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add Atm
      </Button>
      <Box mt={2}>
        <TableData columns={columns} rows={AtmData} />
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
              value={locationName}
              onChange={(e) => setLocationName(e.target.value)}
              required
            />
            <InputField
              label="Welcome Meassge"
              fullWidth
              value={welcomeMessage}
              onChange={(e) => setWelcomeMessage(e.target.value)}
              required
            />
            <InputField
              label="Amount"
              fullWidth
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
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
