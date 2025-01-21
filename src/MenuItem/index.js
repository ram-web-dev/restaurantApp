import './index.css'

const MenuItem = ({cartItems, addCartItems, removeCartItems, dishDetails}) => {
  const {
    dish_id: dishId,
    dish_name: dishName,
    dish_price: dishPrice,
    dish_description: dishDescription,
    dish_calories: dishCalories,
    dish_image: dishImage,
    dish_Type: dishType,
    dish_Availability: dishAvailability,
    dish_currency: dishCurrency,
    addonCat,
  } = dishDetails

  const cartItemIndex = cartItems.findIndex(item => item.id === dishId)

  let count = 0
  if (cartItemIndex !== -1) {
    count = cartItems[cartItemIndex].count
  }

  const decrementCount = () => {
    removeCartItems(dishId)
  }
  const incrementCount = () => {
    addCartItems(dishId)
  }

  const itemLabelUrl =
    dishType === 2
      ? 'https://m.media-amazon.com/images/I/31LIK7w2iTL.jpg'
      : 'https://foodsafetyhelpline.com/wp-content/uploads/2013/05/non-veg-300x259.jpg'
  return (
    <li className="menu-item">
      <div className="menu-item-details">
        <img className="menu-item-label" src={`${itemLabelUrl}`} alt="label" />
        <div>
          <h1 className="menu-item-name">{dishName}</h1>
          <p className="menu-item-price">{`${dishCurrency} ${dishPrice}`}</p>
          <p className="menu-item-description">{dishDescription}</p>
          {dishAvailability ? (
            <>
              <div className="menu-item-quantity-container">
                <button
                  className="menu-item-quantity-btn"
                  onClick={decrementCount}
                  type="button"
                >
                  -
                </button>
                <p className="menu-item-quantity">{count}</p>
                <button
                  className="menu-item-quantity-btn"
                  onClick={incrementCount}
                  type="button"
                >
                  +
                </button>
              </div>
              {addonCat.length > 0 && (
                <p className="customization-text">Customizations available</p>
              )}
            </>
          ) : (
            <p>Not available</p>
          )}
        </div>
      </div>
      <div className="flex-container">
        <p className="menu-item-calories">{dishCalories} calories</p>
        <img className="menu-item-img" src={`${dishImage}`} alt="item" />
      </div>
    </li>
  )
}

export default MenuItem
