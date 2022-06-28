import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import { TableSortLabel } from "@mui/material";
import { useNavigate } from "react-router";

export const ProductHeader = [
  { name: "Model", key: "model" },
  { name: "Make", key: "make" },
  { name: "Year", key: "year" },
  { name: "Category", key: "category" },
  { name: "Fuel Type", key: "fuelType" },
  { name: "From Year", key: "fromyear" },
  { name: "To Year", key: "toyear" },
  { name: "Actions", key: "actions" },
];

export const ProductData = [
  {
    id: "1",
    model: "Sonet",
    make: "Ecomet",
    year: "2002",
    category: "Ashok Leyland",
    fuelType: "Petrol",
    fromyear: "2002",
    toyear: "2002",
    count: "count",
  },
  {
    id: "1",
    model: "i30",
    make: "Hyundai",
    year: "2002",
    category: "Ashok Leyland",
    fuelType: "Petrol",
    fromyear: "2002",
    toyear: "2002",
    count: "count",
  },
  {
    id: "1",
    model: "Fortuner",
    make: "Hyundai",
    year: "2002",
    category: "Ashok Leyland",
    fuelType: "Petrol",
    fromyear: "2002",
    toyear: "2002",
    count: "count",
  },
  {
    id: "1",
    model: "Jimny",
    make: "Hyundai",
    year: "2002",
    category: "Ashok Leyland",
    fuelType: "Petrol",
    fromyear: "2002",
    toyear: "2002",
    count: "count",
  },
  {
    id: "1",
    model: "Carens",
    make: "Hyundai",
    year: "2002",
    category: "Ashok Leyland",
    fuelType: "Petrol",
    fromyear: "2002",
    toyear: "2002",
    count: "count",
  },
  {
    id: "1",
    model: "i30",
    make: "Hyundai",
    year: "2002",
    category: "Ashok Leyland",
    fuelType: "Petrol",
    fromyear: "2002",
    toyear: "2002",
    count: "count",
  },
];

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    "& .MuiTableCell-root": {
      borderLeft: "1px solid rgba(224, 224, 224, 1)",
    },
  },
});

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

export default function EnhancedTable() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: window.innerHeight * 0.4 }}>
        <Table stickyHeader aria-label="sticky table" className={classes.table}>
          <TableHead>
            <TableRow>
              {ProductHeader.map((column) => (
                <TableCell
                  key={column?.id}
                  align={"left"}
                  style={{ minWidth: column?.minWidth }}
                >
                  {column.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {ProductData.length !== 0 &&
              ProductData.slice(
                page * 5,
                page * 5 + 5
              ).map((row, index) => (
                <>
                  <TableRow>
                    {ProductHeader.map((header, index) =>
                      header.key === "actions" ? (
                        <TableCell align="left" style={{ color: "#1E4597" }}>
                          <span
                            style={{
                              cursor: "pointer",
                            }}
                            //onClick={()=> navigate("/view")}
                          >
                            Edit
                          </span>
                          <span
                            style={{
                              cursor: "pointer",
                              marginLeft: "20px",
                            }}
                          >
                            {" "}
                            Delete
                          </span>
                        </TableCell>
                      ) : (
                        <>
                          <TableCell align="left">{row[header.key]}</TableCell>
                        </>
                      )
                    )}
                  </TableRow>
                </>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={ProductData.length}
        rowsPerPage={5}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
