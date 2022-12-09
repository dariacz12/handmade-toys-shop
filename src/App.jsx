import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
import AboutMe from "./pages/AboutMe";
import AdminProductList from "./pages/AdminPanel/ProductListPage";
import CategoryAddingPage from "./pages/AdminPanel/CategoryAddingPage";
import ProductAddingPage from "./pages/AdminPanel/ProductAddingPage";
import LoginPage from "./pages/AdminPanel/LoginPage";
import Protected from "./components/Protected";
import { UserContextProvider } from "./context/UserContext";
import { ProductsContextProvider } from "./context/ProductsContext";
import { CategoryContextProvider } from "./context/CategoryContext";
import ProductEditPage from "./pages/AdminPanel/ProductEditPage";

const App = () => {
  return (
    <UserContextProvider>
      <CategoryContextProvider>
        <ProductsContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contactpage" element={<ContactPage />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/productlist" element={<ProductList />} />
            <Route path="/productlist/:id" element={<ProductList />} />
            <Route path="/productpage/:id" element={<ProductPage />} />
            <Route path="/admin/loginpage" element={<LoginPage />} />
            <Route element={<Protected />}>
              <Route
                path="/admin/productlistpage"
                element={<AdminProductList />}
              />
              <Route
                path="/admin/categoryaddingpage"
                element={<CategoryAddingPage />}
              />
              <Route
                path="/admin/productaddingpage"
                element={<ProductAddingPage />}
              />
              <Route
                path="/admin/producteditpage/:id"
                element={<ProductEditPage />}
              />
            </Route>
          </Routes>
        </ProductsContextProvider>
      </CategoryContextProvider>
    </UserContextProvider>
  );
};

export default App;
