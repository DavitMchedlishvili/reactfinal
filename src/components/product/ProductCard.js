import { Box, styled, Card, Grid, CardActions } from "@mui/material";
import React from "react";
import { Button, Link, Text } from "../atoms";
import { useCart, useUser } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { isUserAdmin } from "../../helpers";
import { useProduct } from "../../hooks/useProduct";

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

const StyledCardActionsContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const ProductCard = ({ product }) => {
  const { name, _id, image, price, category } = product;
  const { userData } = useUser();
  const navigate = useNavigate();
  const { setSelectedProduct } = useProduct();
  const { addToCart, cartItems, removeFromcart } = useCart();

  const onEdit = () => {
    navigate(`/products/edit/${name}`);
    setSelectedProduct(product);
  };

  const isProductInCart = cartItems?.find((item) => item.product._id === _id);

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
        <CardActions>
          <StyledCardActionsContainer>
            {isProductInCart ? (
              <>
                <Button onClick={() => removeFromcart(_id)}>-</Button>
                <Text>{isProductInCart?.quantity}</Text>
                <Button onClick={() => addToCart(product)}>+</Button>
              </>
            ) : (
              <Button onClick={() => addToCart(product)}>Add to cart</Button>
            )}

            <Button>Remove from cart</Button>
            {isUserAdmin(userData) && (
              <Button onClick={onEdit}>Edit Product</Button>
            )}
          </StyledCardActionsContainer>
        </CardActions>
      </StyledCard>
    </Grid>
  );
};
