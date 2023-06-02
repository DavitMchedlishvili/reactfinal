import { Box, Drawer, styled } from "@mui/material";
import React from "react";
import { Button, Text } from "../atoms";
import { useCart, useUser } from "../../hooks";
import { MdDelete } from "react-icons/md";

const StyledCartItem = styled(Box)(() => ({
  width: 400,
  display: "flex",
  alignItems: "center",
  padding: "5px 10px",
  marginBottom: 20,
}));

const StyledButtonContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
});

export const CartDrawer = ({ cartItems, isCartOpen, setIsCartOpen }) => {
  const { userData } = useUser();
  const { saveCart, clearCart } = useCart();
  return (
    <Drawer
      open={isCartOpen}
      onClose={() => setIsCartOpen(false)}
      anchor="right"
    >
      {cartItems.map((item) => {
        const { product, quantity } = item;
        const { price, name, _id, image } = product;
        return (
          <StyledCartItem key={_id}>
            <img
              src={image}
              alt={`${name} - img `}
              width="70px"
              height="70px"
              style={{ objectFit: "cover", borderRadius: 5 }}
            />

            <Box sx={{ paddingLeft: 2 }}>
              <Text>{name}</Text>
              <Text>Quantity:{quantity}</Text>
              <Text>Total:{price * quantity}</Text>
            </Box>
          </StyledCartItem>
        );
      })}

      <StyledButtonContainer>
        <Button
          onClick={() => clearCart(userData._id)}
          variant="outlined"
          startIcon={<MdDelete />}
        >
          clear cart
        </Button>
        {!!userData && (
          <Button
            onClick={() => {
              saveCart({ userId: userData?._id, cartItems });
            }}
          >
            save Cart
          </Button>
        )}
      </StyledButtonContainer>
    </Drawer>
  );
};
