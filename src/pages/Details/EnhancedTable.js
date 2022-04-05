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
import Checkbox from '@mui/material/Checkbox';

import { Button } from "../Common/Button/Button.js";
import Image1 from '../../assets/image 5.png';
import Image2 from '../../assets/image 6.png';

import UploadPopup from "../Common/popup";
export const ProductHeader = [
  { name: "Products ID", key: "id" },
  { name: "Name", key: "name" },
  { name: "Make", key: "make" },
  { name: "Model", key: "model" },
  { name: "Image Count", key: "count" },

];

export const ProductData = [
  { id: "PR739893", name: "Horn", make: "TVS", model: "2019", count: "5" },

];
const ProductImages = [
  { id: 1, image: Image1, flag: false },
  { id: 2, image: Image2, flag: false },
  { id: 3, image: Image1, flag: false },
  { id: 4, image: Image1, flag: false },
  { id: 5, image: Image2, flag: false },
  { id: 6, image: Image2, flag: false },
  { id: 7, image: Image2, flag: false },
  { id: 8, image: Image2, flag: false },
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
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [productImges, setProductImages] = React.useState(ProductImages);
  const [action, setAction] = React.useState("View");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const callClick = (value) => {

    var result = productImges.map(el => el.id == value ? { ...el, flag: true } : el);
    setProductImages(result)

  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
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
                ProductData.map((row, index) => (
                  <>
                    <TableRow>
                      {ProductHeader.map((header, index) =>
                        header.key === "actions" ? (
                          <TableCell align="left" style={{ color: "#1E4597" }}>
                            <span
                              style={{
                                cursor: "pointer",
                              }}
                            >
                              View
                          </span>
                            <span
                              style={{
                                cursor: "pointer",
                                marginLeft: "20px",
                              }}
                            >
                              {" "}
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
        <div style={{ margin: "20px 0", textAlign: "center" }} >
          {productImges.map((value) => (
            <div style={{
              border: "1px solid #F0F0F0", margin: "10px", width: "15%", display: "inline-table"
            }}>
              {action == "View" ? null :
                <Checkbox style={{ float: "left" }} checked={value.flag} onClick={e => callClick(value.id)} />
              }<br></br>
              <img src={value.image} style={{ width: "180px" }} />
            </div>
          ))}
        </div>
        {action == "View" ?
          <>
            <Button
              width="200px"
              height="60px"
              margin="28px 15px 0 32px"
              background="#1E4597"
              borderRadius="0px"
              text="Edit"
              onClick={{
                event: "save",
                fn: () => {
                  setAction("Edit")
                  // history.push(`/`);
                  // history.push({ pathname: "/", state: { page: dashboardPage } })

                  // history.goBack();
                },
                // fn: () => {
                //   // history.goBack();
                // },
              }}
              icon="false"
            ></Button>
            {/* <Button
              width="200px"
              height="60px"
              margin="28px 15px 0 32px"
              background="#1E4597"
              borderRadius="0px"
              text="Delete"
              onClick={{
                event: "save",
                fn: () => {
                  setAction("Delete")
                  // history.push(`/`);
                  // history.push({ pathname: "/", state: { page: dashboardPage } })

                  // history.goBack();
                },
                // fn: () => {
                //   // history.goBack();
                // },
              }}
              icon="false"
            ></Button> */}
          </> : action == "Edit" ? <> <Button
            width="200px"
            height="60px"
            margin="28px 15px 0 32px"
            background="#1E4597"
            borderRadius="0px"
            text="Delete"
            onClick={{
              event: "save",
              fn: () => {
                setAction("View")
                // history.push(`/`);
                // history.push({ pathname: "/", state: { page: dashboardPage } })

                // history.goBack();
              },
              // fn: () => {
              //   // history.goBack();
              // },
            }}
            icon="false"
          ></Button><UploadPopup
              // parentCallback={(e) => handleCallback(e)}
              type="Delete"
              status="true"
            /> </> : null}

        {action == "Edit" ?
          <Button
            width="200px"
            height="60px"
            margin="28px 15px 0 32px"
            background="#1E4597"
            borderRadius="0px"
            text="Update"
            onClick={{
              event: "save",
              fn: () => {
                setAction("View")
                // history.push(`/`);
                // history.push({ pathname: "/", state: { page: dashboardPage } })

                // history.goBack();
              },
              // fn: () => {
              //   // history.goBack();
              // },
            }}
            icon="false"
          ></Button> : null}
      </Paper>

    </>
  );
}