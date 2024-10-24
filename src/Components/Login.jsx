import React, { useContext, useState } from "react";
import { Box, TextField, Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
import HeadSaction from "./HeadSaction";
import InputField from "./InputField";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { transactionType } = useContext(AuthContext);

  const handleNext = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(username);
    console.log("====password", password);

    setTimeout(() => {
      setLoading(false);
      if (transactionType === "Balance Information") {
        navigate("/balanceInfo");
      } else {
        navigate("/amount");
      }
    }, 1000);
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          inputProps={{ maxLength: 10 }}
        />
        <InputField
          label="Pin"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
