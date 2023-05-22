import { Typography } from "@mui/material";
import React from "react";

export const Text = ({ children, variant = "body1" }) => {
  return <Typography variant={variant}>{children}</Typography>;
};
