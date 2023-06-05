import { Box, styled, Card, Grid, CardActions, Rating } from "@mui/material";
// import React, { useState } from "react";
import { Button, Link, Text } from "../atoms";
import { useCart, useUser } from "../../hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosInstance, isUserAdmin } from "../../helpers";
import { useProduct } from "../../hooks/useProduct";

const StyledCard = styled(Card)(() => ({
  width: 370,
  borderRadius: 3,
}));

const StyledInfoContainer = styled(Box)(() => ({
  display: "flex",
  // flexDirection: "column",
  justifyContent: "space-between",
  padding: "0 10px",
}));

const StyledCardActionsContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "5px",
}));

export const ProductCard = ({ product }) => {
  const { name, _id, image, price, category, averageRating } = product;
  const { userData } = useUser();
  const navigate = useNavigate();
  const { setSelectedProduct, rateProducts, getHomePageProducts } =
    useProduct();
  const { addToCart, cartItems, removeFromcart } = useCart();
  const { pathname, search } = useLocation();

  const onEdit = () => {
    navigate(`/products/edit/${name}`);
    setSelectedProduct(product);
  };

  const deleteProduct = async (_id) => {
    const result = await axiosInstance.delete(`/products/${_id}`);
    if (result) {
      getHomePageProducts();
    }
  };

  const isProductInCart = cartItems?.find((item) => item.product._id === _id);

  const onRatingChange = (e) => {
    const { value } = e.target;
    rateProducts({
      productId: _id,
      userId: userData?._id,
      rating: Number(value),
      isHome: pathname === "/",
      url: `${category}${search}&size=2`,
    });
  };

  return (
    <Grid item>
      <StyledCard>
        <Link to={`/products/categories/${category}/${_id}`}>
          <img
            src={image}
            alt={`${category}-${name}`}
            style={{ objectFit: "cover", width: "100%", height: "200px" }}
          />
          <StyledInfoContainer>
            <Text>{name}</Text>
            <Text>$ {price}</Text>
          </StyledInfoContainer>
        </Link>
        <CardActions sx={{ display: "flex", flexDirection: "column" }}>
          <Rating
            value={averageRating}
            disabled={!userData}
            onChange={onRatingChange}
          />
          <StyledCardActionsContainer>
            {isProductInCart ? (
              <>
                <Button onClick={() => removeFromcart(_id)}>-</Button>
                <Text>{isProductInCart?.quantity}</Text>
                <Button onClick={() => addToCart(product)}>+</Button>
              </>
            ) : (
              <Button
                onClick={() => addToCart(product)}
                variant="contained"
                sx={{ bgcolor: "#e1ad01" }}
              >
                Add to cart
              </Button>
            )}

            {isUserAdmin(userData) && (
              <Button
                onClick={onEdit}
                variant="outlined"
                sx={{ borderColor: "#e1ad01", color: "#e1ad01" }}
              >
                Edit Product
              </Button>
            )}

            {isUserAdmin(userData) && (
              <Button
                variant="outlined"
                sx={{ borderColor: "#e1ad01", color: "red" }}
                onClick={() => deleteProduct(_id)}
              >
                Delete
              </Button>
            )}
          </StyledCardActionsContainer>
        </CardActions>
      </StyledCard>
    </Grid>
  );
};
