function Header({ shopName, userName, cartCount }) {
  return (
    <header className="header">
      <h1>{shopName}</h1>
      <div className="header-right">
        <span>Salom, {userName}</span>
        <span className="cart">Savat: {cartCount}</span>
      </div>
    </header>
  );
}

export default Header;
