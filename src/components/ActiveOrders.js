import React from "react";
import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertOutlined";

import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
} from "@mui/material/";

import Usman from "../static/usman.JPG";
import Smile from "../static/noun-smile.png";
import Exclamation from "../static/noun-exclamation.png";
import Star from "../static/noun-star.png";

function createData(
  type,
  order,
  customer,
  zipCode,
  orderTime,
  rider,
  orderAmount,
  sign
) {
  return {
    type,
    order,
    customer,
    zipCode,
    orderTime,
    rider,
    orderAmount,
    sign,
  };
}

const rows = [
  createData(
    "Squad",
    25064,
    "Tommy Hatcher",
    50480,
    "3:12 PM",
    "Bill COhen",
    "$ 123",
    Exclamation
  ),
  createData(
    "Normal",
    26753,
    "Natasha",
    50480,
    "3:12 PM",
    "Ali Akram",
    "$ 123",
    Star
  ),
  createData(
    "Normal",
    27535,
    "Hillary",
    50480,
    "3:12 PM",
    "Matthew",
    "$ 123",
    Smile
  ),
  createData(
    "Normal",
    27535,
    "Hillary",
    50480,
    "3:12 PM",
    "Matthew",
    "$ 123",
    Exclamation
  ),
  createData(
    "Normal",
    27535,
    "Hillary",
    50480,
    "3:12 PM",
    "Matthew",
    "$ 123",
    Star
  ),
  createData(
    "Squad",
    27535,
    "Hillary",
    50480,
    "3:12 PM",
    "Matthew",
    "$ 123",
    Smile
  ),
];

export default function ActiveOrders() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 1090 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "8%" }}>
              <Typography fontWeight="bold" variant="p">
                Type
              </Typography>
              <SwapVertOutlinedIcon fontSize="small" />
            </TableCell>
            <TableCell align="right" sx={{ width: "10%" }}>
              <Typography fontWeight="bold" variant="p">
                Order #
              </Typography>
              <SwapVertOutlinedIcon fontSize="small" />
            </TableCell>
            <TableCell align="right" sx={{ width: "11%" }}>
              <Typography fontWeight="bold" variant="p">
                Customer
              </Typography>
              <SwapVertOutlinedIcon fontSize="small" />
            </TableCell>
            <TableCell align="right" sx={{ width: "11%" }}>
              <Typography fontWeight="bold" variant="p">
                Zip Code
              </Typography>
              <SwapVertOutlinedIcon fontSize="small" />
            </TableCell>
            <TableCell align="right" sx={{ width: "12%" }}>
              <Typography fontWeight="bold" variant="p">
                Order Time
              </Typography>
              <SwapVertOutlinedIcon fontSize="small" />
            </TableCell>
            <TableCell align="right" sx={{ width: "10%" }}>
              <Typography fontWeight="bold" variant="p">
                Vendors
              </Typography>

              <SwapVertOutlinedIcon fontSize="small" />
            </TableCell>
            <TableCell align="right" sx={{ width: "11%" }}>
              <Typography fontWeight="bold" variant="p">
                Rider
              </Typography>

              <SwapVertOutlinedIcon fontSize="small" />
            </TableCell>
            <TableCell align="right" sx={{ width: "290px" }}>
              <Typography fontWeight="bold" variant="p">
                Order Amount
              </Typography>

              <SwapVertOutlinedIcon fontSize="small" />
            </TableCell>
            <TableCell align="right" sx={{ width: "170px" }}>
              <Typography fontWeight="bold" variant="p">
                Performance
              </Typography>
              <SwapVertOutlinedIcon fontSize="small" />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.type}
              </TableCell>
              <TableCell align="right">{row.order}</TableCell>
              <TableCell align="right">
                {row.customer}
                <Avatar alt="Usman picture" src={Usman} />
              </TableCell>
              <TableCell align="right">{row.zipCode}</TableCell>
              <TableCell align="right">{row.orderTime}</TableCell>
              <TableCell align="right">
                <Avatar alt="Usman picture" variant="square" src={Usman} />
              </TableCell>
              <TableCell align="right">{row.rider}</TableCell>
              <TableCell align="right">
                <div
                  style={{
                    borderRadius: "12px",
                    backgroundColor: "#90EE90",
                  }}
                >
                  <Typography align="center">{row.orderAmount}</Typography>
                </div>
              </TableCell>
              <TableCell align="right">
                <img
                  alt="Performance Sign"
                  src={row.sign}
                  width="100"
                  height="100"
                ></img>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
