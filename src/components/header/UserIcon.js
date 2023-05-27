import { Box, Avatar, IconButton, Menu, styled, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { getUsersInitials, isUserAdmin } from "../../helpers";
import { useUser } from "../../hooks";
import { Button } from "../atoms";
import { useNavigate } from "react-router-dom";

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
      <IconButton onClick={(e) => setAnchor(e.currentTarget)}>
        <Avatar>
          {getUsersInitials(userData?.firstName, userData?.lastName)}
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
            <MenuItem>
              <Button
                onClick={() => {
                  logout();
                  setAnchor(null);
                }}
              >
                Log Out
              </Button>
              {isUserAdmin(userData) && (
                <Button
                  onClick={() => {
                    navigate("/products/new");
                    setAnchor(null);
                  }}
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
