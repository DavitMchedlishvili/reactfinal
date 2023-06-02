import { MenuItem, Select } from "@mui/material";
import React from "react";

export const Sort = ({ value, changeSort }) => {
  return (
    <Select
      value={value ?? "price,asc"}
      onChange={(e) => {
        changeSort("sort", e.target.value);
      }}
    >
      <MenuItem value="price,desc">ფასი კლებადობით</MenuItem>
      <MenuItem value="price,asc">ფასი ზრდადობით</MenuItem>
      <MenuItem value="name,desc">სახელი კლებადობით</MenuItem>
      <MenuItem value="name,asc">სახელი ზრდადობით</MenuItem>
    </Select>
  );
};
