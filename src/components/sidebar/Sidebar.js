import { Drawer } from "@mui/material";
import React from "react";
import { SidebarContent } from "./SidebarContent";
import { useProduct } from "../../hooks/useProduct";

export const Sidebar = ({ isDrawerOpen, setDrawerOpen }) => {
  const { categories } = useProduct();

  return (
    <>
      <Drawer
        variant="temporary"
        open={isDrawerOpen}
        onClose={() => {
          setDrawerOpen(!isDrawerOpen);
        }}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "225px",
          },
        }}
      >
        <SidebarContent categories={categories} />
      </Drawer>

      <Drawer
        variant="permanent"
        open
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "225px",
          },
        }}
      >
        <SidebarContent categories={categories} />
      </Drawer>
    </>
  );
};
