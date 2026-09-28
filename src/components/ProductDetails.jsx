import Button from "./Button.jsx";
import Price from "./Price.jsx";

function ProductDetails({ product, onClose }) {
  return (
    <aside className="details">
      <h2>{product.title}</h2>
      <p>Brand: {product.brand}</p>
      <p>Kategoriya: {product.category}</p>
      <p>Reyting: {product.rating}</p>
      <p>Mavjud soni: {product.stock}</p>
      <Price value={product.price} discount={product.discount} />
      <div>
        <Button type="secondary" onClick={onClose}>Yopish</Button>
      </div>
    </aside>
  );
}

export default ProductDetails;
