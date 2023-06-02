import { Button as MUIButton } from "@mui/material";
import React from "react";

export const Button = ({ children, onClick, ...rest }) => {
  return (
    <MUIButton onClick={onClick} {...rest}>
      {children}
    </MUIButton>
  );
};
