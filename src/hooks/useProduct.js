import { useDispatch, useSelector } from "react-redux";
import {
  saveProduct as SaveProductHandler,
  fetchHomePageProducts,
} from "../redux/slices";
import { useNavigate } from "react-router-dom";

export const useProduct = () => {
  const dispatch = useDispatch();

  const homePageProducts = useSelector(
    (state) => state.product.homePageProducts
  );

  const isProductLoading = useSelector((state) => state.product.loading);

  const navigate = useNavigate();

  const getHomePageProducts = () => {
    dispatch(fetchHomePageProducts());
  };

  const saveProduct = (data) => {
    dispatch(SaveProductHandler({ product: data.product }))
      .unwrap()
      .then(() => navigate("/"));
  };

  return {
    homePageProducts,
    isProductLoading,
    saveProduct,
    getHomePageProducts,
  };
};
