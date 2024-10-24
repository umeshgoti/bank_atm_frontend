import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
} from "@mui/material";
import { Link } from "react-router-dom";

const drawerWidth = 240;

function Dashboard() {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const drawer = (
    <div>
      <List>
        {["Customer", "Transaction"].map((text) => (
          <ListItem
            button
            key={text}
            component={Link}
            to={text === "Customer" ? "/customer" : "/transactions"}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div style={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap color="red">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        {drawer}
      </Drawer>
      <main style={{ flexGrow: 1, padding: 16, marginTop: 64 }}>
        <Typography paragraph>Welcome to the dashboard!</Typography>
      </main>
    </div>
  );
}

export default Dashboard;
