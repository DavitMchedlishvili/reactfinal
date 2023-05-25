import { TextField } from "@mui/material";
import React from "react";

export const Input = ({
  type = "text",
  name,
  label,
  onChange,
  error,
  value,
}) => {
  return (
    <TextField
      type={type}
      name={name}
      label={label}
      onChange={onChange}
      value={value}
      error={Boolean(error)}
      helperText={error}
      sx={{
        marginTop: 5,
        "& fieldset": {
          boarderRadius: "25px",
        },
      }}
    />
  );
};
