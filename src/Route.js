import React from "react";
import { Route, Routes } from "react-router-dom";

import { HomePage, RegisterPage, LoginPage, ProductFormPage } from "./pages";
import { ProtectedRoute, isUserAdmin } from "./helpers";
import { useUser } from "./hooks";

export const RoutesComponent = () => {
  const { userData } = useUser();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/products/new"
        element={
          <ProtectedRoute isUserAdmin={isUserAdmin(userData)}>
            <ProductFormPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/products/edit/:name"
        element={
          <ProtectedRoute isUserAdmin={isUserAdmin(userData)}>
            <ProductFormPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
