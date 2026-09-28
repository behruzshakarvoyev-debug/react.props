import Badge from "./Badge.jsx";
import Button from "./Button.jsx";
import Price from "./Price.jsx";

// product - bitta obyekt sifatida keladi (12-qism).
// onAddToCart, onFavorite, onDetails - parentga xabar beruvchi callback'lar (15, 16, Challenge D).
function ProductCard({ product, isFavorite = false, onAddToCart, onFavorite, onDetails }) {
  const { title, brand, price, discount, image, category, rating, stock, isAvailable, isNew } = product;

  return (
    <article className="product-card">
      <img src={image} alt={title} />

      <div className="badges">
        {isNew && <Badge text="NEW" type="new" />}
        {rating > 4.5 && <Badge text="Top rated" type="popular" />}
        {discount > 0 && <Badge text="Sale" type="sale" />}
        {!isAvailable && <Badge text="Out of stock" type="danger" />}
      </div>

      <h3>{title}</h3>
      <p className="brand">Brand: {brand}</p>
      <p className="category">Kategoriya: {category}</p>
      <Price value={price} discount={discount} />
      <p>Reyting: {rating}</p>
      <p>Mavjud soni: {stock}</p>

      <p className={isAvailable ? "available" : "unavailable"}>
        {isAvailable ? "Sotuvda mavjud" : "Mahsulot tugagan"}
      </p>
      {isAvailable && stock < 5 && <p className="warning">Kam qoldi!</p>}
      {isFavorite && <p className="fav">Sevimli mahsulot</p>}

      <div className="actions">
        {isAvailable && (
          <Button type="primary" onClick={() => onAddToCart?.(product)}>
            Savatga qo'shish
          </Button>
        )}
        <Button type="secondary" onClick={() => onDetails?.(product)}>
          Batafsil
        </Button>
        <Button type="ghost" onClick={() => onFavorite?.(product)}>
          {isFavorite ? "♥ Sevimlidan olish" : "♡ Sevimli"}
        </Button>
      </div>
    </article>
  );
}

export default ProductCard;
