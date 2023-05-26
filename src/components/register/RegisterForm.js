import React from "react";
import { FormContainer, Input } from "../atoms";
import { useForm } from "../../hooks";
import { generateRegisterFormValues } from "./generateRegisterFormValues";
import { Button } from "@mui/material";
import { useUser } from "../../hooks/useUser";

export const RegisterForm = () => {
  const {
    formValues: registerFormValues,
    onFormChange: onRegisterinputChange,
  } = useForm({ defaultFormValues: generateRegisterFormValues() });

  const { authenticateUser } = useUser();

  const onRegister = () => {
    const firstName = registerFormValues.firstName.value;
    const lastName = registerFormValues.lastName.value;
    const email = registerFormValues.email.value;
    const password = registerFormValues.password.value;
    authenticateUser({
      formValues: { firstName, lastName, email, password },
      isLogin: false,
    });
  };

  return (
    <FormContainer>
      <Input
        name="firstName"
        label="FirstName"
        value={registerFormValues.firstName.value}
        onChange={onRegisterinputChange}
        error={registerFormValues.firstName.error}
      />
      <Input
        name="lastName"
        label="LastName"
        value={registerFormValues.lastName.value}
        onChange={onRegisterinputChange}
        error={registerFormValues.lastName.error}
      />
      <Input
        name="email"
        label="Email"
        value={registerFormValues.email.value}
        onChange={onRegisterinputChange}
        error={registerFormValues.email.error}
      />
      <Input
        name="password"
        label="Password"
        type="password"
        value={registerFormValues.password.value}
        onChange={onRegisterinputChange}
        error={registerFormValues.password.error}
      />
      <Button onClick={onRegister}>Register</Button>
    </FormContainer>
  );
};
