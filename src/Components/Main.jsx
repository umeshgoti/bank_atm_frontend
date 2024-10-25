import React, { useContext, useState } from "react";
import { Box, Button, Typography, Select, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HeadSaction from "./HeadSaction";
import ButtonCompo from "./ButtonCompo";
import { useSelector } from "react-redux";
import { AuthContext } from "../App";

const Main = () => {
  const navigate = useNavigate();
  const AtmData = useSelector((state) => state.atm.atmData);
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleClick = () => {
    navigate("/transactions");
  };
  const { setAtmId } = useContext(AuthContext);

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };
  const handleData = (data) => {
    setAtmId(data.id);
  };
  const handleAdmin = () => {
    navigate("/login");
  };
  return (
    <>
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
          <Box>
            <HeadSaction title={"Welcome to the"} />

            <Select
              value={selectedLocation}
              onChange={handleLocationChange}
              displayEmpty
              fullWidth
            >
              <MenuItem value="">
                <em>Select a location</em>
              </MenuItem>
              {AtmData.map((atm, index) => (
                <MenuItem
                  key={index}
                  value={atm.locationName}
                  onClick={() => handleData(atm)}
                >
                  {atm.locationName}
                </MenuItem>
              ))}
            </Select>
          </Box>
          {/* <Typography variant="h6">
          {selectedLocation
            ? `Welcome to ${selectedLocation}`
            : "Please select a location"}
        </Typography> */}

          <Box display={"flex"} justifyContent={"center"}>
            <ButtonCompo onClick={handleClick} text="Start" />
          </Box>
        </Box>
        <ButtonCompo onClick={handleAdmin} text="Login" />
      </Box>
    </>
  );
};

export default Main;
