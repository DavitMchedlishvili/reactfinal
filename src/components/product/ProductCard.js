import { Box, styled, Card, Grid } from "@mui/material";
import React from "react";
import { Link, Text } from "../atoms";

const StyledCard = styled(Card)(() => ({
  width: 350,
  borderRadius: 3,
}));

const StyledInfoContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "0 10px",
}));

export const ProductCard = ({ product }) => {
  const { name, _id, image, price, category } = product;

  return (
    <Grid item>
      <StyledCard>
        <Link>
          <img
            src={image}
            alt={`${category}-${name}`}
            style={{ objectFit: "cover", width: "100%", height: "200px" }}
          />
          <StyledInfoContainer>
            <Text>{name}</Text>
            <Text>${price}</Text>
          </StyledInfoContainer>
        </Link>
      </StyledCard>
    </Grid>
  );
};
