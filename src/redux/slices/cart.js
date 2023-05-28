import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers";

export const fetchCart = createAsyncThunk(
  "cart/fetcCart",
  async (userId, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`/users/${userId}/cart`);
      return data;
    } catch (error) {
      return rejectWithValue("couldn't load Cart");
    }
  }
);

export const saveCart = createAsyncThunk(
  "cart/saveCart",
  async ({ userId, cartItems }, { dispatch, rejectWithValue }) => {
    try {
      await axiosInstance.put(`/users/${userId}/cart`, { products: cartItems });
      dispatch(fetchCart(userId));
    } catch (error) {
      return rejectWithValue("couldn't save Cart");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    loading: false,
    error: null,
    cartItems: [],
  },
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },

    addToCart: (state, action) => {
      const product = action.payload;
      const productId = product._id;
      const cartItem = state.cartItems?.find(
        (item) => item.product._id === productId
      );
      if (cartItem) {
        const updateCart = state.cartItems.map((item) =>
          item.product._id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        state.cartItems = updateCart;
      } else {
        state.cartItems.push({ product, quantity: 1 });
      }
    },

    removeFromcart: (state, action) => {
      const productId = action.payload;
      const cartItem = state.cartItems?.find(
        (item) => item.product._id === productId
      );
      if (cartItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.product._id !== productId
        );
      } else {
        state.cartItems = state.cartItems.map((item) =>
          item.product._id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.loading = false;
      state.cartItems = action.payload.cart;
    });
    builder.addCase(fetchCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(saveCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(saveCart.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(saveCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { addToCart, removeFromcart, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
