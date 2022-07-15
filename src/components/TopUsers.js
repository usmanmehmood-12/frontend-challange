import React from "react";

import { Grid, Paper, Typography, Box } from "@mui/material";

import Avatar from "@mui/material/Avatar";
import Usman from "../static/usman.JPG";

const TopUsers = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ marginBottom: "50px", marginTop: "20px" }}
    >
      <Grid item xs={4}>
        <Paper variant="outlined">
          <Box
            sx={{
              width: 200,
              height: 20,
              backgroundColor: "#FFA500",
              alignItems: "left",
            }}
          >
            <Typography color="#E5E4E2" fontWeight="bold">
              Top Customer
            </Typography>
          </Box>
          <div style={{ margin: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Avatar alt="Usman picture" src={Usman} />
                <Typography>Christina Ambrosia</Typography>
              </div>

              <div style={{ textAlign: "center" }}>
                <Typography fontWeight="bold">$ 49,137</Typography>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "13px",
              }}
            >
              <div>
                <Typography color="#818589" variant="body2" fontWeight="bold">
                  Revenue / Month
                </Typography>
                <Typography>$ 13469.80</Typography>
              </div>
              <div>
                <Typography variant="body2" color="#818589" fontWeight="bold">
                  Processed Orders/ Month
                </Typography>
                <Typography>182</Typography>
              </div>
            </div>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper variant="outlined">
          <Box
            sx={{
              width: 200,
              height: 20,
              backgroundColor: "#FFA500",
              alignItems: "left",
            }}
          >
            <Typography color="#E5E4E2" fontWeight="bold">
              Top Rider
            </Typography>
          </Box>
          <div style={{ margin: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Avatar alt="Usman picture" src={Usman} />
                <Typography>Alex Williams</Typography>
              </div>
              <div style={{ textAlign: "center" }}>
                <Typography fontWeight="bold">$ 49,137</Typography>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "13px",
              }}
            >
              <div>
                <Typography variant="body2" color="#818589" fontWeight="bold">
                  Avg Rating
                </Typography>
                <Typography>$ 13469.80</Typography>
              </div>
              <div>
                <Typography variant="body2" color="#818589" fontWeight="bold">
                  Processed Orders/ Month
                </Typography>
                <Typography>182</Typography>
              </div>
            </div>
          </div>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper variant="outlined">
          <Box
            sx={{
              width: 200,
              height: 20,
              backgroundColor: "#FFA500",
              alignItems: "left",
            }}
          >
            <Typography color="#E5E4E2" fontWeight="bold">
              Top Rider
            </Typography>
          </Box>
          <div style={{ margin: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Avatar alt="Usman picture" src={Usman} />
                <Typography>Desi Accent</Typography>
              </div>
              <div style={{ textAlign: "center" }}>
                <Typography fontWeight="bold">$ 134,669</Typography>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "13px",
              }}
            >
              <div>
                <Typography variant="body2" color="#818589" fontWeight="bold">
                  Revenue / Month
                </Typography>
                <Typography>$ 13469.80</Typography>
              </div>
              <div>
                <Typography variant="body2" color="#818589" fontWeight="bold">
                  Processed Orders/ Month
                </Typography>
                <Typography>182</Typography>
              </div>
            </div>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TopUsers;
