import React, { useContext, useEffect, useState } from "react";
import { Box, Select, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HeadSaction from "./HeadSaction";
import ButtonCompo from "./ButtonCompo";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../App";
import { fetchAtmRequest } from "../redux/action/atmAction";
import { fetchTransactionRequest } from "../redux/action/transactionAction";
import { fetchVideoAndImageRequest } from "../redux/action/v&iAction";
import { fetchCustomerRequest } from "../redux/action/customerAction";

const Main = () => {
  const navigate = useNavigate();
  const AtmData = useSelector((state) => state.atm.atmData);
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleClick = () => {
    navigate("/transactions");
  };
  const { setAtmId } = useContext(AuthContext);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAtmRequest());
  }, []);

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
      <Box p={1}>
        <Box display={"flex"} justifyContent={"end"}>
          <ButtonCompo onClick={handleAdmin} text="Login" />
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height="90vh"
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
            <Box display={"flex"} justifyContent={"center"}>
              <HeadSaction title={"Welcome to the"} />

              <Select
                value={selectedLocation}
                onChange={handleLocationChange}
                displayEmpty
                size="small"
                sx={{ marginLeft: 2 }}
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
        </Box>
      </Box>
    </>
  );
};

export default Main;
