import {
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeadSaction from "./HeadSaction";
import InputField from "./InputField";

function Amount() {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const handleButton = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/finalPage");
    }, 3000);
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
        <HeadSaction title={"Amount"} />
        <InputField
          label="Amount"
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Box display={"flex"} justifyContent={"center"}>
          <Button
            type="submit"
            variant="contained"
            onClick={handleButton}
            disabled={loading}
            size="small"
            color="secondary"
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Next"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Amount;
