import { Box, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const activeStyle = {
    backgroundColor: "#410a59",
    color: "red",
    fontWeight: "bolder",
  };

  return (
    <div className="back">
      <Box>
        <NavLink
          to="/customer"
          style={({ isActive }) =>
            isActive ? activeStyle : { textDecoration: "none" }
          }
        >
          <Box sx={{ width: "100%", padding: "15px 0 0 0" }}>
            <Typography
              py={1}
              sx={{ textTransform: "capitalize", fontSize: "18px" }}
              variant="body1"
              display="flex"
              alignContent="center"
            >
              <Box>Customer</Box>
            </Typography>
          </Box>
        </NavLink>

        <NavLink
          to="/lastTransaction"
          style={({ isActive }) =>
            isActive ? activeStyle : { textDecoration: "none" }
          }
        >
          <Box sx={{ width: "100%", padding: "0px 0" }}>
            <Typography
              py={1}
              sx={{ textTransform: "capitalize", fontSize: "18px" }}
              variant="body1"
              display={"flex"}
              alignContent={"center"}
            >
              <Box>Transaction</Box>
            </Typography>
          </Box>
        </NavLink>
        <NavLink
          to="/atm"
          style={({ isActive }) =>
            isActive ? activeStyle : { textDecoration: "none" }
          }
        >
          <Box sx={{ width: "100%", padding: "0px 0" }}>
            <Typography
              py={1}
              sx={{ textTransform: "capitalize", fontSize: "18px" }}
              variant="body1"
              display={"flex"}
              alignContent={"center"}
            >
              <Box>Atm</Box>
            </Typography>
          </Box>
        </NavLink>
      </Box>
    </div>
  );
}

export default Sidebar;
