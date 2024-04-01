import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

export const fetchProducts = createAsyncThunk('pizza/fetchProducts', async () => {
  const { data } = await axios('https://api.noguchi.com.ua/wp-json/wp/v2/product?per_page=100');
  console.log(data);
  return data ;
});

export const fetchProductsImages = createAsyncThunk('pizza/fetchProductsImages', async () => {
  const { data } = await axios('https://api.noguchi.com.ua/wp-json/wp/v2/media?per_page=100');
  console.log(data);
  return data ;
});

enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
  }

interface ProductsSliceState {
  items: [];
  images: [];
  status: 'loading' | 'success' | "error";
}
const initialState: ProductsSliceState = {
  items: [],
  images: [],
  status: Status.LOADING,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // setPizzas: (state, action) => {
    //   state.items = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = 'loading';
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    })
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = 'error';
    })
    builder.addCase(fetchProductsImages.pending, (state) => {
      //state.status = 'loading';
    })
    builder.addCase(fetchProductsImages.fulfilled, (state, action) => {
      state.images = action.payload;
      //state.status = 'success';
    })
    builder.addCase(fetchProductsImages.rejected, (state) => {
     // state.status = 'error';
    })
  }
  // extraReducers: {
  //   [fetchPizzas.pending]: (state) => {
  //     state.status = 'loading';
  //   },
  //   [fetchPizzas.fulfilled]: (state, action) => {
  //     state.items = action.payload;
  //     state.status = 'success';
  //   },
  //   [fetchPizzas.rejected]: (state) => {
  //     state.status = 'error';
  //   },
  // },
});

export const selectProducts = (state: RootState) => state.products;
// Action creators are generated for each case reducer function
//export const { setPizzas } = pizzaSlice.actions;

export default productsSlice.reducer;
