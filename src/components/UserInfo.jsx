function UserInfo({ firstName, lastName, email, city, isPremium }) {
  return (
    <section className="user-info">
      <h2>{firstName} {lastName}</h2>
      <p>Email: {email}</p>
      <p>Shahar: {city}</p>
      <p className={isPremium ? "premium" : "standard"}>
        {isPremium ? "Premium User" : "Standard User"}
      </p>
    </section>
  );
}

export default UserInfo;
