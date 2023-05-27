import React from "react";
import { Button, FormContainer, Input } from "../atoms";
import { useForm } from "../../hooks";
import { generateLoginFormValues } from "./generateLoginFormValues";
import { useUser } from "../../hooks";

export const LoginForm = () => {
  const { formValues: loginFormValues, onFormChange: onLoginFormChange } =
    useForm({ defaultFormValues: generateLoginFormValues() });

  const { authenticateUser } = useUser();

  const onLogin = () => {
    const email = loginFormValues.email.value;
    const password = loginFormValues.password.value;
    authenticateUser({ formValues: { email, password }, isLogin: true });
  };

  return (
    <FormContainer>
      <Input
        name="email"
        label="Email"
        value={loginFormValues.email.value}
        onChange={onLoginFormChange}
        error={loginFormValues.email.error}
      />
      <Input
        name="password"
        label="Password"
        value={loginFormValues.password.value}
        onChange={onLoginFormChange}
        error={loginFormValues.password.error}
        type="password"
      />
      <Button onClick={onLogin}>Login</Button>
    </FormContainer>
  );
};
