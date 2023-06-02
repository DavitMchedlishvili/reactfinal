import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../../hooks/useProduct";
import { LoadingWrapper } from "../../atoms";
import { SingleProductCard } from "./SingleProductCard";

export const SingleProduct = () => {
  const { categoryName, id } = useParams();
  const { getSingleProduct, isProductLoading, singleProduct } = useProduct();

  useEffect(() => {
    getSingleProduct({ category: categoryName, id });
  }, [id, categoryName]);
  console.log(singleProduct, "SingleProduct");
  return (
    <LoadingWrapper isLoading={isProductLoading || !singleProduct}>
      <SingleProductCard product={singleProduct} />
    </LoadingWrapper>
  );
};
