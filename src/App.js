import React, { useEffect } from "react";
import { Header } from "./components/header/Header";
import { RoutesComponent } from "./Route";
import { Box, styled } from "@mui/material";
import { useProduct } from "./hooks/useProduct";
import { useCart, useUser } from "./hooks";

const StyledContentContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    marginLeft: "255px",
  },
  marginTop: "60px",
  height: "calc(100vh - 64px)",
  padding: 10,
}));

const App = () => {
  const { getHomePageProducts } = useProduct();
  const { userData } = useUser();
  const { fetchCart } = useCart();

  useEffect(() => {
    getHomePageProducts();
  }, []);

  useEffect(() => {
    if (userData?._id) {
      fetchCart(userData?._id);
    }
  }, [userData]);

  return (
    <Box>
      <Header />
      <StyledContentContainer>
        <RoutesComponent />
      </StyledContentContainer>
    </Box>
  );
};

export default App;
