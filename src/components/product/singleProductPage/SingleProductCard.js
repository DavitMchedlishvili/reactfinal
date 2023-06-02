import { Box, styled } from "@mui/material";
import React from "react";
import { Text } from "../../atoms";

const StyledBox = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
}));

const StyledImage = styled("img")(() => ({
  width: "350px",
  height: "200px",
}));

export const SingleProductCard = ({ product }) => {
  const { name, image, category, brand, description } = product;

  return (
    <StyledBox>
      <StyledImage src={image} />
      <Box>
        <Text variant="h4">{name}</Text>
        <Text variant="h4">{category}</Text>
        <Text variant="h6">{brand}</Text>
        <Text variant="h7">{description}</Text>
      </Box>
    </StyledBox>
  );
};
