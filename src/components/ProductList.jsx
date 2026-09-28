import ProductCard from "./ProductCard.jsx";
import EmptyState from "./EmptyState.jsx";

function ProductList({ products, favorites, onAddToCart, onFavorite, onDetails }) {
  if (products.length === 0) {
    return <EmptyState message="Hozircha mahsulotlar mavjud emas" />;
  }

  return (
    <section className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={favorites.includes(product.id)}
          onAddToCart={onAddToCart}
          onFavorite={onFavorite}
          onDetails={onDetails}
        />
      ))}
    </section>
  );
}

export default ProductList;
