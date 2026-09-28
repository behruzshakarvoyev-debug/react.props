// text prop yoki children orqali matn berish mumkin.
// <Button text="Batafsil" />  ==  <Button>Batafsil</Button>
function Button({ text, children, type = "primary", disabled = false, onClick }) {
  return (
    <button className={`btn btn-${type}`} disabled={disabled} onClick={onClick}>
      {children ?? text}
    </button>
  );
}

export default Button;
