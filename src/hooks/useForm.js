import { useState } from "react";

export const useForm = ({ defaultFormValues }) => {
  const [formValues, setFormValues] = useState(defaultFormValues);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    const { validateInput } = formValues[name];
    setFormValues((prevFormValues) => {
      return {
        ...prevFormValues,
        [name]: {
          ...prevFormValues[name],
          value,
          error: validateInput ? validateInput(value) : undefined,
        },
      };
    });
  };

  const clearForm = (obj) => {
    setFormValues(obj);
  };

  return {
    formValues,
    onInputChange,
    clearForm,
  };
};
