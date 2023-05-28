import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers";

export const saveProduct = createAsyncThunk(
  "product/saveProduct",
  async ({ product, isUpdating, id }, { rejectWithValue, dispatch }) => {
    try {
      const endpoint = isUpdating ? `/products/${id}` : "/products/";
      const method = isUpdating ? "put" : "post";
      const { data } = await axiosInstance[method](endpoint, { product });
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
    selectedProduct: null,
  },

  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
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
export const { setSelectedProduct } = productSlice.actions;
