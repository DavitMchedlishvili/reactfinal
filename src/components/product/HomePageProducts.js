import React from "react";
import { useProduct } from "../../hooks/useProduct";
import { ProductCard } from "./ProductCard";
import { GridContainer, LoadingWrapper } from "../atoms";

export const HomePageProducts = () => {
  const { homePageProducts, isProductLoading } = useProduct();
  return (
    <LoadingWrapper isLoading={isProductLoading}>
      <GridContainer>
        {homePageProducts.map((item) => (
          <ProductCard product={item} />
        ))}
      </GridContainer>
    </LoadingWrapper>
  );
};
