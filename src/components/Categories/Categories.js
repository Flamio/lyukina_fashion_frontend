import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainPageActions } from "../../actions";

import './Categories.css'

const Categories = () => {
  const categories = useSelector((c) => c.categories);

  const [currentCategory, setCurrentCategory] = useState(null)

  const dispatch = useDispatch()

  const onCategoryClick = (event, id) => {
    if (currentCategory === id) {
      setCurrentCategory(-1)
      dispatch(MainPageActions.getAll(0)); 
      event.preventDefault()
      return;
    }
    setCurrentCategory(id)
    dispatch(MainPageActions.getAll(0, id)); 
    event.preventDefault()
  }

  return (
    <ul className="product-filter-menu row justify-content-center">
      {categories.map((c) => (
        <li key={c.id}>
          <a href="#" onClick={(event) => onCategoryClick(event, c.id)} className={`${c.id === currentCategory && 'active'}`}>{c.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
