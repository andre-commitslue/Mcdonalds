import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import ProductDetail from "./pages/ProductDetail";
import Deals from "./pages/Deals";
import Checkout from "./pages/Checkout";
import StoreLocator from "./pages/StoreLocator";
import AppPromo from "./pages/AppPromo";
import GenericPage from "./pages/GenericPage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="deals" element={<Deals />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="locations" element={<StoreLocator />} />
          <Route path="app" element={<AppPromo />} />
          <Route path="about" element={<GenericPage title="About Us" />} />
          <Route path="careers" element={<GenericPage title="Careers" />} />
          <Route path="help" element={<GenericPage title="Help & Support" />} />
        </Route>
      </Routes>
    </Router>
  );
}
