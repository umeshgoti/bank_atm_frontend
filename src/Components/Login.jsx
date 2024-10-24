import React, { useContext, useState } from "react";
import { Box, TextField, Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
import HeadSaction from "./HeadSaction";
import InputField from "./InputField";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import Api from "../api";
import Swal from "sweetalert2";

const Login = () => {
  const [mobileNo, setMobileNo] = useState("");
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { transactionType } = useContext(AuthContext);
  const api = new Api();

  const handleNext = async (e) => {
    e.preventDefault();
    setLoading(true);
    const obj = { mobileNo, pin };
    api
      .postAPI(`user/login`, obj)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("token", response.data.data.token);
          localStorage.setItem("customerId", response.data.data.id);
          const decoded = jwtDecode(response.data.data.token);
          if (decoded.Role === "CUSTOMER") {
            if (transactionType === "Balance Information") {
              navigate("/balanceInfo");
            } else {
              navigate("/amount");
            }
          } else {
            navigate("/customer");
          }
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: "Error create order data, please contact to support...!",
          icon: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      height="100vh"
    >
      <Box
        component="form"
        onSubmit={handleNext}
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
        <HeadSaction title={"Login"} />
        <InputField
          label="Phone Number"
          type="text"
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
          inputProps={{ maxLength: 10 }}
        />
        <InputField
          label="Pin"
          type="password"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          inputProps={{ maxLength: 4 }}
        />
        <Box display={"flex"} justifyContent={"center"}>
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            color="secondary"
          >
            {loading ? <CircularProgress size={24} /> : "Next"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
