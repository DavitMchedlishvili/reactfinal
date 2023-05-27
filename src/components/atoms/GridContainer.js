import { Grid } from "@mui/material";
import React from "react";

export const GridContainer = ({ children }) => {
  return (
    <Grid container spacing={4} sx={{ widtb: "100%" }}>
      {children}
    </Grid>
  );
};
