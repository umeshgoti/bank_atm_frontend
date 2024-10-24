import { Box } from "@mui/material";
import Sidebar from "./Components/Sidebar";

export const ViewMaster = (Component) => {
  const NewComponent = (props) => {
    return (
      <Box display="flex">
        <Box
          sx={{
            width: "200px",
            height: "100vh",
            position: "fixed",
            overflow: "hidden",
            padding: "0px 10px",
          }}
        >
          <Sidebar />
        </Box>
        <Box
          sx={{
            marginLeft: "200px",
            width: "calc(100% - 200px)",
            background: "#a9a9a92e",
            height: "100vh",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            padding: "10px",
          }}
        >
          {/* <Box
                        sx={{
                            position: "sticky",
                            top: 0,
                            zIndex: 1000,
                        }}
                    >
                        <Header />
                    </Box> */}
          <Component {...props} />
        </Box>
      </Box>
    );
  };

  return NewComponent;
};
