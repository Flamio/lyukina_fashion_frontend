import { useSelector } from "react-redux";

const Categories = () => {
  const categories = useSelector((c) => c.categories);

  return (
    <ul className="product-filter-menu row justify-content-center">
      {categories.map((c) => (
        <li key={c.id}>
          <a href="#">{c.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
