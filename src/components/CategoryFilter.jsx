import Button from "./Button.jsx";

function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <nav className="filter">
      <Button type={selected === "All" ? "primary" : "secondary"} onClick={() => onSelect("All")}>
        Hammasi
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          type={selected === category ? "primary" : "secondary"}
          onClick={() => onSelect(category)}
        >
          {category}
        </Button>
      ))}
    </nav>
  );
}

export default CategoryFilter;
