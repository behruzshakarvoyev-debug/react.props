// Qayta ishlatiladigan komponent: ProductCard, ProductDetails va CartSummary'da ishlatiladi.
function format(n) {
  return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function Price({ value, discount = 0 }) {
  const finalPrice = value - (value * discount) / 100;

  if (discount > 0) {
    return (
      <span className="price">
        <s className="old-price">{format(value)} so'm</s>{" "}
        <strong className="new-price">{format(finalPrice)} so'm</strong>{" "}
        <span className="discount">-{discount}%</span>
      </span>
    );
  }

  return (
    <span className="price">
      <strong>{format(value)} so'm</strong>
    </span>
  );
}

export default Price;
