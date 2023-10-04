import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import HomePage from "./pages/HomePage";
import Orders from "./pages/Orders";
import Auth from "./pages/Auth";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";
import Appbar from "./components/Appbar";
import { theme } from "./utils/Theme";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
