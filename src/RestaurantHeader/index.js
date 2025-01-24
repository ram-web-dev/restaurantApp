import {IoCartOutline} from 'react-icons/io5'

import './index.css'

const RestaurantHeader = ({cartItems, restaurantName}) => (
  <div className="resto-cafe-header">
    <h1>{restaurantName}</h1>
    <div>
      <p>My Orders</p>
      <div className="cart-icon-container">
        <IoCartOutline size="50" />
        <div className="cart-items-badge">
          <p>{cartItems.length}</p>
        </div>
      </div>
    </div>
  </div>
)
export default RestaurantHeader
