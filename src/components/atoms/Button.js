import { Button as MUIButton } from "@mui/material";
import React from "react";

export const Button = ({ children, onClick }) => {
  return <MUIButton onClick={onClick}>{children}</MUIButton>;
};
