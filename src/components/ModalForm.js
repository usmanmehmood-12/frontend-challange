import { Button, Container, Grid, Paper } from "@mui/material";
import React from "react";
import { Modal } from "react-responsive-modal";
const ModalForm = (props) => {
  console.log("props: ", props);
  return (
    <div>
      <Container>
        <Grid container spacing={1} color="secondary">
          <Grid xs={12}>
            <Modal
              open={props.isOpen}
              onClose={() => {
                props.useHandleClose(false);
              }}
            >
              <Paper elevation={5} style={{ height: "100%", padding: "2%" }}>
                <h2>Order Acceptance</h2>
                <form>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="small"
                    sx={{
                      float: "left",
                      marginTop: "2%",
                      backgroundColor: "#D70040",
                    }}
                  >
                    Submit
                  </Button>
                </form>
              </Paper>
            </Modal>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ModalForm;
