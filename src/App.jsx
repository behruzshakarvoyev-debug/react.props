import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInfo from "./components/UserInfo.jsx";
import CategoryFilter from "./components/CategoryFilter.jsx";
import ProductList from "./components/ProductList.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import CartSummary from "./components/CartSummary.jsx";
import { shop, user, products, categories } from "./data/products.js";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]); // [{ product, qty }]
  const [favorites, setFavorites] = useState([]); // id'lar ro'yxati
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Child (ProductCard) shu funksiyani chaqiradi va qaysi mahsulot ekanini yuboradi
  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        if (existing.qty >= product.stock) return prev; // ombordagidan ko'p qo'shilmaydi
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { product, qty: 1 }];
    });
  };

  const handleFavorite = (product) => {
    setFavorites((prev) =>
      prev.includes(product.id) ? prev.filter((id) => id !== product.id) : [...prev, product.id]
    );
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const visibleProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="app">
      <Header shopName={shop.name} userName={user.firstName} cartCount={cartCount} />
      <UserInfo
        firstName={user.firstName}
        lastName={user.lastName}
        email={user.email}
        city={user.city}
        isPremium={user.isPremium}
      />
      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      {selectedProduct && (
        <ProductDetails product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
      <ProductList
        products={visibleProducts}
        favorites={favorites}
        onAddToCart={handleAddToCart}
        onFavorite={handleFavorite}
        onDetails={setSelectedProduct}
      />
      <CartSummary cartItems={cart} />
    </div>
  );
}

export default App;
