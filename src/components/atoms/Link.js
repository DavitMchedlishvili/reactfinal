import React from "react";
import { Link as RouterLink } from "react-router-dom";

export const Link = ({ children, linkTo }) => {
  return (
    <RouterLink to={linkTo} style={{ textDecoration: "none", color: "black" }}>
      {children}
    </RouterLink>
  );
};
