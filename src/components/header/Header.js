import React, { useState } from "react";
import { AppBar, Toolbar, Box, styled } from "@mui/material";
import { Button, Link } from "../atoms";
import { UserIcon } from "./UserIcon";
import { CartDrawer } from "./CartDrawer";
import { useCart } from "../../hooks";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: "red",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "calc(100% - 255px)",
  },
  padding: "0 37px 0 30px",
}));

const StyledToolBar = styled(Toolbar)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
}));

export const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useCart();
  console.log("cart", isCartOpen);
  return (
    <Box>
      <StyledAppBar>
        <StyledToolBar>
          <Link linkTo="/">Home</Link>
          <UserIcon />
          <Button onClick={() => setIsCartOpen(true)}>Open Cart</Button>
          <CartDrawer
            isCartOpen={isCartOpen}
            cartItems={cartItems}
            setIsCartOpen={setIsCartOpen}
          />
        </StyledToolBar>
      </StyledAppBar>
    </Box>
  );
};
