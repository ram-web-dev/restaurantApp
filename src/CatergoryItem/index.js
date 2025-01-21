import './index.css'

const CategoryItem = ({
  categoryName,
  menuCategoryId,
  setActiveCategoryId,
  isActive,
}) => (
  <li className={`category-item ${isActive ? 'active' : ' '}`}>
    <button
      className="category-name"
      type="button"
      onClick={() => {
        setActiveCategoryId(menuCategoryId)
      }}
    >
      {categoryName}
    </button>
  </li>
)

export default CategoryItem
