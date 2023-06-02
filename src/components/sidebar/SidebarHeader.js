import { Box, styled } from "@mui/material";
import React from "react";

const StyledSidebarHeader = styled(Box)(() => ({
  padding: "0 15px",
  height: "64px",
  display: "flex",
  alignItems: "center",
  backgroundColor: "red",
}));

export const SidebarHeader = () => {
  return <StyledSidebarHeader>Logo</StyledSidebarHeader>;
};
