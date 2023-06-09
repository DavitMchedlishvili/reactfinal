import { Box, Avatar, IconButton, Menu, styled, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { getUsersInitials, isUserAdmin } from "../../helpers";
import { useUser } from "../../hooks";
import { Button } from "../atoms";
import { useNavigate } from "react-router-dom";
import { CgLogOut } from "react-icons/cg";
import { BiUserCircle } from "react-icons/bi";

const StyledBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: 10,
}));

export const UserIcon = () => {
  const { userData, logout } = useUser();
  const [anchor, setAnchor] = useState(null);
  const navigate = useNavigate();

  return (
    <Box>
      <IconButton
        onClick={(e) => setAnchor(e.currentTarget)}
        sx={{ backgroundColor: "#3e363f" }}
      >
        <Avatar sx={{ backgroundColor: "#3e363f" }}>
          {/* {getUsersInitials(userData?.firstName, userData?.lastName)} */}
          <BiUserCircle size={30} />
        </Avatar>
      </IconButton>
      <Menu
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={() => {
          setAnchor(null);
        }}
      >
        <StyledBox>
          {!!userData ? (
            <MenuItem sx={{ gap: "5px" }}>
              <Button
                onClick={() => {
                  logout();
                  setAnchor(null);
                }}
                sx={{ gap: "5px" }}
                variant="outlined"
              >
                <CgLogOut />
                Log Out
              </Button>
              {isUserAdmin(userData) && (
                <Button
                  onClick={() => {
                    navigate("/products/new");
                    setAnchor(null);
                  }}
                  variant="outlined"
                >
                  Add Product
                </Button>
              )}
            </MenuItem>
          ) : (
            <Box>
              <MenuItem>
                <Button
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Log In
                </Button>
              </MenuItem>
              <MenuItem>
                <Button
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  Register
                </Button>
              </MenuItem>
            </Box>
          )}
        </StyledBox>
      </Menu>
    </Box>
  );
};
