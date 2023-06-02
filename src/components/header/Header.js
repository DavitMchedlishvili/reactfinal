import React, { useState } from "react";
import { AppBar, Toolbar, Box, styled } from "@mui/material";
import { Button, Link } from "../atoms";
import { UserIcon } from "./UserIcon";
import { CartDrawer } from "./CartDrawer";
import { useCart } from "../../hooks";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiSideBarFill } from "react-icons/ri";
import { BiHomeAlt } from "react-icons/bi";
import { SearchBar } from "./SearchBar";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: "#ADD8E6",
  boxShadow: "none",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    width: "calc(100% - 225px)",
  },
  padding: "0 37px 0 30px",
}));

const StyledToolBar = styled(Toolbar)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
}));

export const Header = ({ setIsDrawerOpen }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <Box>
      <StyledAppBar>
        <StyledToolBar>
          <Button
            onClick={() => setIsDrawerOpen((prev) => !prev)}
            sx={{ display: { sm: "none" } }}
          >
            <RiSideBarFill size={35} cursor={"pointer"} color="black" />
          </Button>
          <Link to="/">
            <BiHomeAlt size={35} cursor={"pointer"} color="black" />
          </Link>
          <SearchBar />
          <UserIcon />
          <Button onClick={() => setIsCartOpen(true)}>
            <AiOutlineShoppingCart size={35} cursor={"pointer"} color="black" />
          </Button>
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
