import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  stickyHeader: {
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
  tableContainer: {
    maxHeight: "90vh",
    overflow: "auto",
  },
}));

const TableData = ({ rows = [], title, columns = [] }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Typography variant="h6" align="center" gutterBottom>
        {title}
      </Typography>
      <Table stickyHeader>
        <TableHead>
          <TableRow className={classes.stickyHeader}>
            <TableCell
              align="center"
              sx={{ background: "#b48ec3", padding: "5px" }}
            >
              #
            </TableCell>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align || "left"}
                sx={{ background: "#b48ec3", padding: "5px" }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={row.id || index}>
              <TableCell align="center" sx={{ padding: "5px" }}>
                {index + 1}
              </TableCell>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align || "left"}
                  sx={{ padding: "5px" }}
                >
                  {column.render
                    ? column.render(row)
                    : row[column.id]
                    ? row[column.id]
                    : "----------"}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
