import React, { useState } from "react";
import Filebase64 from "react-file-base64";
import { Button, FormContainer, Input } from "../../atoms";
import { useForm } from "../../../hooks";
import { generateProductFormValues } from "./generateProductFormValues";
import { useProduct } from "../../../hooks/useProduct";

export const ProductForm = () => {
  const { formValues: productFormValues, onFormChange: onProductFormChange } =
    useForm({ defaultFormValues: generateProductFormValues() });

  const { saveProduct } = useProduct();
  const [image, setImage] = useState("");
  const onSave = () => {
    const name = productFormValues.name.value;
    const description = productFormValues.description.value;
    const brand = productFormValues.brand.value;
    const category = productFormValues.category.value;
    const price = productFormValues.price.value;
    saveProduct({
      product: { name, description, brand, category, price, image },
    });
  };

  return (
    <FormContainer>
      <Input
        name="name"
        value={productFormValues.name.value}
        onChange={onProductFormChange}
        error={productFormValues.name.error}
        label="Product Name"
      />
      <Input
        name="description"
        value={productFormValues.description.value}
        onChange={onProductFormChange}
        error={productFormValues.description.error}
        label="Product Description"
      />
      <Input
        name="category"
        value={productFormValues.category.value}
        onChange={onProductFormChange}
        error={productFormValues.category.error}
        label="Product Category"
      />
      <Input
        name="brand"
        value={productFormValues.brand.value}
        onChange={onProductFormChange}
        error={productFormValues.brand.error}
        label="Product Brand"
      />
      <Input
        name="price"
        value={productFormValues.price.value}
        onChange={onProductFormChange}
        error={productFormValues.price.error}
        label="Product Price"
      />
      <Filebase64
        type="file"
        multiple={false}
        onDone={({ base64 }) => {
          setImage(base64);
        }}
      />
      <Button onClick={onSave}>Save Product</Button>
    </FormContainer>
  );
};
