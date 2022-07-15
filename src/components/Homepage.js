import React, { useState } from "react";

import { Button, Grid, Paper, Typography } from "@mui/material";

import ActiveOrders from "./ActiveOrders";
import CompanyInsights from "./CompanyInsights";
import SimpleChart from "./SimpleChart";
import TopUsers from "./TopUsers";

import Customers from "../static/noun-people.png";
import Orders from "../static/noun-bag.png";
import Revenue from "../static/noun-revenue.png";
import Delivery from "../static/noun-delivery.png";

const Homepage = () => {
  const [showInsights, setShowInsights] = useState(false);
  return (
    <div>
      {showInsights === false ? (
        <>
          <div
            style={{
              marginLeft: "150px",
              marginRight: "10px",
            }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "40px",
                  marginTop: "10px",
                }}
              >
                <Paper variant="outlined">
                  <Typography
                    align="center"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "5px",
                      width: "110px",
                    }}
                    fontWeight="bold"
                  >
                    Filter By
                  </Typography>
                </Paper>
                <Button
                  onClick={() => {
                    setShowInsights(true);
                  }}
                  size="large"
                  variant="contained"
                  sx={{
                    backgroundColor: "#D70040",
                    width: "100px",
                    borderRadius: "16px",
                  }}
                >
                  TQM
                </Button>
              </Grid>

              <Grid item xs={2}>
                <Paper>
                  <div style={{ textAlign: "center", marginLeft: "10px" }}>
                    <img
                      alt="people"
                      src={Customers}
                      width="100"
                      height="100"
                    />
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      color="textPrimary"
                    >
                      CUSTOMERS
                    </Typography>
                    <br></br>
                    <Typography
                      variant="p"
                      sx={{ fontSize: "0.9rem" }}
                      color="textPrimary"
                    >
                      7340
                    </Typography>
                  </div>
                </Paper>
                <Paper sx={{ marginTop: "10%" }}>
                  <div style={{ textAlign: "center", marginLeft: "10px" }}>
                    <img alt="people" src={Revenue} width="100" height="100" />
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      color="textPrimary"
                    >
                      Revenue
                    </Typography>
                    <br></br>
                    <Typography
                      variant="p"
                      sx={{ fontSize: "0.9rem" }}
                      color="textPrimary"
                    >
                      7340
                    </Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper>
                  <div style={{ textAlign: "center", marginLeft: "10px" }}>
                    <img alt="people" src={Orders} width="100" height="100" />
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      color="textPrimary"
                    >
                      ORDERS
                    </Typography>
                    <br></br>
                    <Typography
                      variant="p"
                      sx={{ fontSize: "0.9rem" }}
                      color="textPrimary"
                    >
                      1207
                    </Typography>
                  </div>
                </Paper>
                <Paper sx={{ marginTop: "10%" }}>
                  <div style={{ textAlign: "center", marginLeft: "10px" }}>
                    <img
                      alt="people"
                      src={Customers}
                      width="100"
                      height="100"
                    />
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      color="textPrimary"
                    >
                      AVG.RATING
                    </Typography>
                    <br></br>
                    <Typography
                      variant="p"
                      sx={{ fontSize: "0.9rem" }}
                      color="textPrimary"
                    >
                      4.0
                    </Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper>
                  <div style={{ textAlign: "center", marginLeft: "10px" }}>
                    <img alt="people" src={Delivery} width="100" height="100" />
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      color="textPrimary"
                    >
                      DELIVERY
                    </Typography>
                    <br></br>
                    <Typography
                      variant="p"
                      sx={{ fontSize: "0.9rem" }}
                      color="textPrimary"
                    >
                      12907
                    </Typography>
                  </div>
                </Paper>
                <Paper sx={{ marginTop: "10%" }}>
                  <div style={{ textAlign: "center", marginLeft: "10px" }}>
                    <img alt="people" src={Revenue} width="100" height="100" />
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      color="textPrimary"
                      sx={{ marginBottom: "-20px" }}
                    >
                      AVG.REVENUE PER CUSTOMER
                    </Typography>
                    <br></br>
                    <Typography
                      variant="p"
                      sx={{ fontSize: "0.9rem" }}
                      color="textPrimary"
                    >
                      $12907
                    </Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={2}>
                <Paper>
                  <div style={{ textAlign: "center", marginLeft: "10px" }}>
                    <img alt="people" src={Revenue} width="100" height="100" />
                    <br></br>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      color="textPrimary"
                    >
                      USERS
                    </Typography>
                    <br></br>
                    <Typography
                      variant="p"
                      sx={{ fontSize: "0.9rem" }}
                      color="textPrimary"
                    >
                      12907
                    </Typography>
                  </div>
                </Paper>
                <Paper sx={{ marginTop: "10%" }}>
                  <div style={{ textAlign: "center", marginLeft: "10px" }}>
                    <img alt="people" src={Revenue} width="100" height="100" />
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      color="textPrimary"
                      sx={{ marginBottom: "-20px" }}
                    >
                      AVG.REVENUE PER USER
                    </Typography>
                    <br></br>
                    <Typography
                      variant="p"
                      sx={{ fontSize: "0.9rem" }}
                      color="textPrimary"
                    >
                      $ 12907
                    </Typography>
                  </div>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper>
                  <SimpleChart />
                </Paper>
              </Grid>
            </Grid>
            <Grid container>
              <TopUsers />
              <ActiveOrders />
            </Grid>
          </div>
        </>
      ) : (
        <CompanyInsights showInsights={showInsights} />
      )}
    </div>
  );
};

export default Homepage;
