import { Box, List, ListItem, ListItemText, styled } from "@mui/material";
import React from "react";
import { SidebarHeader } from "./SidebarHeader";
import { Link } from "../atoms";

const StyledListItem = styled(ListItem)(() => ({
  padding: "5px 0px 3px 15px",
  margin: "0px",
}));

export const SidebarContent = ({ categories }) => {
  return (
    <>
      <SidebarHeader />
      <List>
        {categories.map((item) => {
          const { _id, name } = item;
          return (
            <React.Fragment key={_id}>
              <Link to={`/products/categories/${name}?page=1&sort=price,desc`}>
                <Box sx={{ display: "flex" }}>
                  <StyledListItem>
                    <ListItemText secondary={name} />
                  </StyledListItem>
                </Box>
              </Link>
            </React.Fragment>
          );
        })}
      </List>
    </>
  );
};
