import { Box, styled } from "@mui/material";
import React from "react";
import { IoLogoGameControllerB } from "react-icons/io";

const StyledSidebarHeader = styled(Box)(() => ({
  padding: "0 15px",
  height: "64px",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#e1ad01",
}));

export const SidebarHeader = () => {
  return (
    <StyledSidebarHeader>
      <IoLogoGameControllerB size={60} />
      Your Gaming Shop
    </StyledSidebarHeader>
  );
};
