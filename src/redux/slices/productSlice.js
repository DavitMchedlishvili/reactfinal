import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers";

export const saveProduct = createAsyncThunk(
  "product/saveProduct",
  async ({ product }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axiosInstance.post("/products", { product });
      dispatch(fetchHomePageProducts());
      return data;
    } catch (error) {
      return rejectWithValue("couldn't save product");
    }
  }
);

export const fetchHomePageProducts = createAsyncThunk(
  "product/fetchHomePageProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/products");
      return data;
    } catch (error) {
      rejectWithValue("couldn't fetch product");
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    product: null,
    error: null,
    homePageProducts: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomePageProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchHomePageProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.homePageProducts = action.payload.products;
    });
    builder.addCase(fetchHomePageProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

(builder) => {
  builder.addCase(saveProduct.pending, (state) => {
    state.loading = true;
  });
  builder.addCase(saveProduct.fulfilled, (state) => {
    state.loading = false;
    state.error = null;
  });
  builder.addCase(saveProduct.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  });
};

export const productReducer = productSlice.reducer;
