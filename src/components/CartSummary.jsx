import Price from "./Price.jsx";
import EmptyState from "./EmptyState.jsx";

// cartItems: [{ product, qty }]
function CartSummary({ cartItems }) {
  if (cartItems.length === 0) {
    return <EmptyState message="Savat bo'sh" />;
  }

  return (
    <section className="cart-summary">
      <h2>Savat</h2>
      <ul>
        {cartItems.map(({ product, qty }) => (
          <li key={product.id}>
            {product.title} x {qty} -{" "}
            <Price value={product.price * qty} discount={product.discount} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CartSummary;
