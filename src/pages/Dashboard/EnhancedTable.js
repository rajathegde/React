import React, { useEffect, useState } from "react";
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

import { Link } from "react-router-dom";
export const ProductHeader = [
  { name: "Products ID", key: "partno" },
  { name: "Name", key: "componentname" },
  { name: "Make", key: "make" },
  { name: "Model", key: "model" },
  { name: "Image Count", key: "count" },
  { name: "Action", key: "actions" },
];

// export const ProductData = [
//   { id: "PR739893", name: "HORN", make: "TVS", model: "2019", count: "5" },
//   { id: "PR739894", name: "HORN", make: "TVS", model: "2019", count: "5" },
//   { id: "PR739895", name: "HORN", make: "TVS", model: "2019", count: "5" },
//   { id: "PR739896", name: "HORN", make: "TVS", model: "2019", count: "5" },
//   { id: "PR739897", name: "HORN", make: "TVS", model: "2019", count: "5" },
//   { id: "PR739898", name: "HORN", make: "TVS", model: "2019", count: "5" },

// ];

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
    "& .MuiTableCell-root": {
      borderLeft: "1px solid rgba(224, 224, 224, 1)",
    },
  },
});

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

export default function EnhancedTable(props) {
  const navigate = useNavigate();
 
 
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [ProductData,setProductData] = React.useState([]);


  useEffect(() => {
    console.log("hmmmm",props.data)
    setProductData(props.data)
  });
  // if(props.data){
  //   const [ProductData] =  React.useState(props.data.length)
  // }
  // if(props.datalength>0){
  //   setProductData(props.data)
  // }
 
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer >
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
              ProductData.slice(page * 5, page * 5 + 5).map((row, index) => (
                <>
                  <TableRow>
                    {ProductHeader.map((header, index) =>
                      header.key === "actions" ? (
                        <TableCell align="left" style={{ color: "#1E4597" }}>
                          <Link
                            // to={{ pathname: ('/viewproduct'), state: { from: "the-page-id"} }}
                            to={`/viewproduct`}
                            state={{ data: row }}
                            style={{ textDecoration: "none" }}
                          ><span
                            style={{
                              cursor: "pointer",
                              color:"#1E4597"

                            }}
                          >
                              View
                          </span> </Link>
                          
                          <Link
                            to={`/edit`}
                            state={{ data: row }}
                            style={{ textDecoration: "none" }}
                          ><span
                            style={{
                              cursor: "pointer",
                              marginLeft: "20px",
                              color:"#1E4597"
                             }}
                          >

{/* <Link to={{ pathname: ('/viewproduct'), state: { id: record.id.$oid} }}>  */}
                              Edit
                          </span> </Link>

                          <Link
                            to={`/edit`}
                            state={{ data: row }}
                            style={{ textDecoration: "none" }}
                          ><span
                            style={{
                              cursor: "pointer",
                              marginLeft: "20px",
                              color:"#1E4597"
                             }}
                          >
                            {" "}
                            Delete
                            </span> </Link>
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


