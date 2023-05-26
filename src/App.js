import React from "react";
import { Header } from "./components/header/Header";
import { RoutesComponent } from "./Route";
import { Box, styled } from "@mui/material";

const StyledContentContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    marginLeft: "255px",
  },
  marginTop: "60px",
  height: "calc(100vh - 64px)",
  padding: 10,
}));

function App() {
  return (
    <Box>
      <Header />
      <StyledContentContainer>
        <RoutesComponent />
      </StyledContentContainer>
    </Box>
  );
}

export default App;
