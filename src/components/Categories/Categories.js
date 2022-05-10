import { useDispatch, useSelector } from "react-redux";
import { MainPageActions, ProductsActions } from "../../actions";
import { CategoriesActions } from "../../actions/CategoriesActions";

import './Categories.css'

const Categories = () => {
  const categories = useSelector((c) => c.categories.data);

  const currentCategory = useSelector((c) => c.categories.current);

  const dispatch = useDispatch()

  const onCategoryClick = (event, id) => {
    dispatch(ProductsActions.clearProducts())
    if (currentCategory === id) {
      dispatch(CategoriesActions.changeCategory(null))      
      dispatch(MainPageActions.getAll(0)); 
      event.preventDefault()
      return;
    }
    dispatch(CategoriesActions.changeCategory(id))
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
