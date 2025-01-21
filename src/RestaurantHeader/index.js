import {IoCartOutline} from 'react-icons/io5'

import './index.css'

const RestaurantHeader = ({cartItems, restaurantName}) => {
  console.log(cartItems)
  const uniqueItems = new Set(cartItems)

  return (
    <div className="resto-cafe-header">
      <h2>{restaurantName}</h2>
      <div>
        <p>My Orders</p>
        <div className="cart-icon-container">
          <IoCartOutline size="50" />
          <div className="cart-items-badge">
            <p>{uniqueItems.size}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RestaurantHeader
