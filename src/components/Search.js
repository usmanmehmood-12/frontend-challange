import React from "react";
import { InputBase, IconButton, Paper, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import SearchIcon from "@mui/icons-material/Search";

const ChildPaper = styled(Paper)(({ theme }) => ({
  p: "2px 4px",
  display: "flex",
  alignItems: "center",
  width: 400,
}));

const MyGrid = styled(Grid)(() => ({
  justifyContent: "right",
  display: "flex",
  alignItems: "center",
}));

const Search = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <MyGrid item xs={12}>
          <ChildPaper component="form">
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search for movies"
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </ChildPaper>
        </MyGrid>
      </Grid>
    </div>
  );
};

export default Search;
