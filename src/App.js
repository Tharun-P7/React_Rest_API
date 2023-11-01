import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import ProductSearch from "./components/ProductSearch";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageNotFound from "./components/404";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product-search" element={<ProductSearch />}></Route>
        <Route path="/product" element={<ProductDetails />}></Route>
        <Route path="/page-not-found" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/page-not-found" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
