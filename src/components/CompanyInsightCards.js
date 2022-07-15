import React from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";

import DeliveryOrder from "../static/noun-order-delivery.png";
import ClearingPayments from "../static/noun-payment-accepted.png";
import TotalQualityScore from "../static/noun-badge.png";
import OrderAcceptance from "../static/noun-order-delivery.png";

const cardEntries = [
  {
    title: "Order Acceptance",
    percntage: "85%",
    pIncrease: "",
    pDecrease: "8%",
    buttonValue: "Phase 1 Goal",
    image: "OrderAcceptance",
    bgColor: "#FFA500",
  },
  {
    title: "Reaching Vendor",
    percntage: "95%",
    pIncrease: "8%",
    pDecrease: "",
    buttonValue: "Phase 2 Goal",
    image: "UpdateIcon",
    bgColor: "#FFF9A6",
  },
  {
    title: "Delivery Order",
    percntage: "99%",
    pIncrease: "8%",
    pDecrease: "",
    buttonValue: "Ultimate Goal",
    image: "LocalShippingIcon",
    bgColor: "#90EE90",
  },
  {
    title: "Clearing Payments",
    percntage: "65%",
    pIncrease: "",
    pDecrease: "8%",
    buttonValue: "None",
    image: "ClearingPayments",
    bgColor: "#D70040",
  },
  {
    title: "Total Quality Score",
    percntage: "85%",
    pIncrease: "",
    pDecrease: "8%",
    buttonValue: "Phase 1 Goal",
    image: "TotalQualityScore",
    bgColor: "#FFA500",
  },
];

const CompanyInsightCards = () => {
  return (
    <div>
      <Grid container spacing={3}>
        {cardEntries.map((cardEntry) => {
          return (
            <>
              <Grid item xs={4}>
                <Paper elevation={1} style={{ borderRadius: "12px" }}>
                  {cardEntry.image === "OrderAcceptance" && (
                    <img
                      alt="Order Acceptance"
                      src={OrderAcceptance}
                      width="100"
                      height="100"
                    />
                  )}
                  {cardEntry.image === "UpdateIcon" && (
                    <img
                      alt="Update Icon"
                      src={ClearingPayments}
                      width="100"
                      height="100"
                    />
                  )}
                  {cardEntry.image === "ClearingPayments" && (
                    <img
                      alt="Clearing Payments Icon"
                      src={ClearingPayments}
                      width="100"
                      height="100"
                    />
                  )}
                  {cardEntry.image === "LocalShippingIcon" && (
                    <img
                      alt="Local Shipping Icon"
                      src={DeliveryOrder}
                      width="100"
                      height="100"
                    />
                  )}
                  {cardEntry.image === "TotalQualityScore" && (
                    <img
                      alt="Total Quality Score Icon"
                      src={TotalQualityScore}
                      width="100"
                      height="100"
                    />
                  )}

                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    style={{ marginTop: "10px" }}
                  >
                    {cardEntry.title}
                  </Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {cardEntry.percntage}
                  </Typography>
                  <Button
                    sx={{
                      backgroundColor: cardEntry.bgColor,
                      borderRadius: "20px",
                      marginBottom: "20px",
                    }}
                    variant="contained"
                  >
                    {cardEntry.buttonValue}
                  </Button>
                </Paper>
              </Grid>
            </>
          );
        })}
      </Grid>
    </div>
  );
};

export default CompanyInsightCards;
