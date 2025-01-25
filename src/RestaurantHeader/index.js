import {IoCartOutline} from 'react-icons/io5'

import './index.css'

const RestaurantHeader = ({cartItems, restaurantName}) => {
  const totalCount = cartItems.reduce(
    (res, cartItem) => res + cartItem?.count,
    0,
  )
  return (
    <div className="resto-cafe-header">
      <h1>{restaurantName}</h1>
      <div>
        <p>My Orders</p>
        <div className="cart-icon-container">
          <IoCartOutline size="50" />
          <div className="cart-items-badge">
            <p>{totalCount}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default RestaurantHeader
