import React, { useState } from "react";

import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import Search from "./Search";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import CompanyInsightCards from "./CompanyInsightCards";

const CompanyInsights = () => {
  const [isOpen, setIsOpen] = useState(false);
  const useHandleClose = (isOpen) => {
    setIsOpen(false);
  };
  return (
    <div style={{ marginLeft: "200px", marginRight: "80px" }}>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Button
            style={{
              backgroundColor: "#D70040",
              borderTopLeftRadius: "80px 80px",
              borderBottomLeftRadius: "80px 80px",
            }}
            variant="contained"
          >
            Quality
          </Button>
          <Button
            variant="contained"
            style={{
              backgroundColor: "white",
              color: "grey",
              borderTopRightRadius: "80px 80px",
              borderBottomRightRadius: "80px 80px",
            }}
          >
            Performance
          </Button>
        </Grid>
        <Grid
          item
          xs={2}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <IconButton
            onClick={() => {
              setIsOpen(true);
            }}
          >
            <EditRoundedIcon fontSize="default" />
          </IconButton>
        </Grid>
        <Grid
          item
          xs={8}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <TextField id="date" type="date" name="date" />
        </Grid>
        <Grid item xs={4}>
          <Search />
        </Grid>
      </Grid>
      <Typography
        variant="h5"
        fontWeight="bold"
        style={{ marginLeft: "2px", marginBottom: "20px", float: "left" }}
      >
        Company Insights
      </Typography>
      <CompanyInsightCards />
      <div>
        <Modal
          open={isOpen}
          onClose={useHandleClose}
          style={{ overflow: "scroll", marginTop: "20px" }}
        >
          <div>
            <Paper
              elevation={5}
              style={{
                marginRight: "30%",
                marginLeft: "30%",
                borderRadius: "15px",
                height: "90%",
                padding: "2%",
              }}
            >
              <Grid container>
                <Grid item xs={12}>
                  <h2>Order Acceptance</h2>
                </Grid>
                <Grid item xs={4}>
                  <div style={{ float: "left", marginRight: "5%" }}>
                    <Typography>Phase 1 Goal Limit</Typography>
                    <FormControl style={{ width: "100%" }}>
                      <InputLabel>Select</InputLabel>
                      <Select>
                        <MenuItem value={"lorem"}>lorem</MenuItem>
                        <MenuItem value={"ipsum"}>ipsum</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div style={{ marginRight: "5%" }}>
                    <Typography>Phase 2 Goal Limit</Typography>
                    <FormControl style={{ width: "100%" }}>
                      <InputLabel>Select</InputLabel>
                      <Select>
                        <MenuItem value={"lorem"}>lorem</MenuItem>
                        <MenuItem value={"ipsum"}>ipsum</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Typography>Ultimate Goal Limit</Typography>
                    <FormControl style={{ width: "100%" }}>
                      <InputLabel>Select</InputLabel>
                      <Select>
                        <MenuItem value={"lorem"}>lorem</MenuItem>
                        <MenuItem value={"ipsum"}>ipsum</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <h2>Reaching Vendor</h2>
                </Grid>
                <Grid item xs={12}>
                  <div>
                    <Typography>Standard Reach Vendor Time</Typography>
                    <FormControl style={{ width: "40%" }}>
                      <InputLabel>Select</InputLabel>
                      <Select>
                        <MenuItem value={"lorem"}>lorem</MenuItem>
                        <MenuItem value={"ipsum"}>ipsum</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div style={{ marginRight: "5%" }}>
                    <Typography>Phase 1 Goal Limit</Typography>
                    <FormControl style={{ width: "100%" }}>
                      <InputLabel>Select</InputLabel>
                      <Select>
                        <MenuItem value={"lorem"}>lorem</MenuItem>
                        <MenuItem value={"ipsum"}>ipsum</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div style={{ marginRight: "5%" }}>
                    <Typography>Phase 2 Goal Limit</Typography>
                    <FormControl style={{ width: "100%" }}>
                      <InputLabel>Select</InputLabel>
                      <Select>
                        <MenuItem value={"lorem"}>lorem</MenuItem>
                        <MenuItem value={"ipsum"}>ipsum</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Typography>Ultimate Goal Limit</Typography>
                    <FormControl style={{ width: "100%" }}>
                      <InputLabel>Select</InputLabel>
                      <Select>
                        <MenuItem value={"lorem"}>lorem</MenuItem>
                        <MenuItem value={"ipsum"}>ipsum</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <h2>Delivering Order</h2>
                </Grid>
                <Grid item xs={4}>
                  <div style={{ float: "left", marginRight: "5%" }}>
                    <Typography>Prime Zone Minute</Typography>
                    <FormControl style={{ width: "100%" }}>
                      <InputLabel>Select</InputLabel>
                      <Select>
                        <MenuItem value={"lorem"}>lorem</MenuItem>
                        <MenuItem value={"ipsum"}>ipsum</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div style={{ marginRight: "5%" }}>
                    <Typography>Secondary Zone</Typography>
                    <FormControl style={{ width: "100%" }}>
                      <InputLabel>Select</InputLabel>
                      <Select>
                        <MenuItem value={"lorem"}>lorem</MenuItem>
                        <MenuItem value={"ipsum"}>ipsum</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid item xs={4}>
                  <div>
                    <Typography>Other Zone Minutes</Typography>
                    <FormControl style={{ width: "100%" }}>
                      <InputLabel>Select</InputLabel>
                      <Select>
                        <MenuItem value={"lorem"}>lorem</MenuItem>
                        <MenuItem value={"ipsum"}>ipsum</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </Grid>
                <Grid item xs={12} align="center">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{
                      marginTop: "2%",
                      backgroundColor: "#D70040",
                      borderRadius: "14px",
                    }}
                  >
                    Update
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default CompanyInsights;
