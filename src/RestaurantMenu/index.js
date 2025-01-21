import {useState, useEffect} from 'react'

import './index.css'

import CatergoryItem from '../CatergoryItem'

import MenuItem from '../MenuItem'

const RestaurantMenu = ({
  tableMenuList,
  cartItems,
  addCartItems,
  removeCartItems,
}) => {
  const [activeCategoryId, setActiveCategoryId] = useState(0)

  useEffect(() => {
    setActiveCategoryId(tableMenuList[0]?.menu_category_id)
  }, [tableMenuList])

  const activeCategory = tableMenuList.find(
    eachCategory => eachCategory.menu_category_id === activeCategoryId,
  )

  const itemsList = activeCategory?.category_dishes

  return (
    <div className="restaurant-menu-container">
      <ul className="category-list">
        {tableMenuList.map(eachCategory => (
          <CatergoryItem
            key={eachCategory.menu_category_id}
            isActive={activeCategoryId === eachCategory.menu_category_id}
            menuCategoryId={eachCategory.menu_category_id}
            categoryName={eachCategory.menu_category}
            setActiveCategoryId={setActiveCategoryId}
          />
        ))}
      </ul>
      <ul className="items-list">
        {itemsList?.map(eachItem => (
          <MenuItem
            dishDetails={eachItem}
            key={eachItem.dish_id}
            addCartItems={addCartItems}
            removeCartItems={removeCartItems}
            cartItems={cartItems}
          />
        ))}
      </ul>
    </div>
  )
}

export default RestaurantMenu
