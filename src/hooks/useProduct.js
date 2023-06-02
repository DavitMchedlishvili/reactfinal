import { useDispatch, useSelector } from "react-redux";
import {
  saveProduct as SaveProductHandler,
  fetchCategoryProducts as fetchProductsByCategory,
  fetchHomePageProducts,
  setSelectedProduct as selectProduct,
  fetchSingleProduct,
  rateProduct,
  queryProducts,
  clearSearchResults as clearQueryResults,
} from "../redux/slices";
import { useNavigate } from "react-router-dom";

export const useProduct = () => {
  const dispatch = useDispatch();

  const homePageProducts = useSelector(
    (state) => state.product.homePageProducts
  );

  const selectedProduct = useSelector((state) => state.product.selectedProduct);

  const isProductLoading = useSelector((state) => state.product.loading);

  const categories = useSelector((state) => state.product.categories);

  const categoryProducts = useSelector(
    (state) => state.product.categoryProducts
  );

  const singleProduct = useSelector((state) => state.product.singleProduct);

  const searchResults = useSelector((state) => state.product.searchResults);

  const navigate = useNavigate();

  const setSelectedProduct = (data) => {
    dispatch(selectProduct(data));
  };

  const getHomePageProducts = () => {
    dispatch(fetchHomePageProducts());
  };

  const fetchCategoryProducts = (url) => {
    dispatch(fetchProductsByCategory(url));
  };

  const getSingleProduct = (data) => {
    dispatch(fetchSingleProduct(data));
  };

  const saveProduct = (data) => {
    dispatch(
      SaveProductHandler({
        product: data.product,
        isUpdating: data.isUpdating,
        id: data.id,
      })
    )
      .unwrap()
      .then(() => {
        setSelectedProduct(null);
        navigate("/");
      });
  };

  const rateProducts = (data) => {
    dispatch(rateProduct(data));
  };

  const searchProducts = (data) => {
    dispatch(queryProducts(data));
  };

  const clearSearchResults = () => {
    dispatch(clearQueryResults());
  };

  return {
    homePageProducts,
    isProductLoading,
    singleProduct,
    selectedProduct,
    categories,
    categoryProducts,
    searchResults,

    //////

    saveProduct,
    getHomePageProducts,
    setSelectedProduct,
    fetchCategoryProducts,
    getSingleProduct,
    rateProducts,
    searchProducts,
    clearSearchResults,
  };
};
