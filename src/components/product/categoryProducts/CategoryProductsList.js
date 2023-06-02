import React, { useEffect } from "react";
import { GridContainer, LoadingWrapper } from "../../atoms";
import { ProductCard } from "../ProductCard";
import { useProduct } from "../../../hooks/useProduct";
import { useParams } from "react-router-dom";
import { Paginate } from "./Paginate";
import { useQueryParams } from "../../../hooks";
import { Sort } from "./Sort";

export const CategoryProductsList = () => {
  const { categoryProducts, fetchCategoryProducts, isProductLoading } =
    useProduct();
  const { products, totalPages } = categoryProducts;
  const { categoryName } = useParams();
  const { value: page, changeQueryValue: changePage } = useQueryParams("page");
  const { value: sort, changeQueryValue: changeSort } = useQueryParams("sort");

  useEffect(() => {
    fetchCategoryProducts(`${categoryName}?page=${page}&size=2&sort=${sort}`);
  }, [categoryName, page, sort]);

  useEffect(() => {
    changePage("page", 1);
  }, [sort]);

  return (
    <LoadingWrapper isLoading={isProductLoading}>
      <Sort value={sort} changeSort={changeSort} />
      <GridContainer>
        {products.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </GridContainer>
      <Paginate
        totalPages={totalPages}
        currentPage={page}
        changePage={changePage}
      />
    </LoadingWrapper>
  );
};
