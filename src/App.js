import {useState, useEffect} from 'react'
import './App.css'

import RestaurantHeader from './RestaurantHeader'
import RestaurantMenu from './RestaurantMenu'

const App = () => {
  const [cartItems, setCartItems] = useState([])
  const [restaurantData, setRestaurantData] = useState([{}])

  const addCartItems = cartItemId => {
    const cartItem = cartItems.find(item => item.id === cartItemId)
    if (cartItem === undefined) {
      const newCartItem = {
        id: cartItemId,
        count: 1,
      }
      setCartItems(pervCartItems => [...pervCartItems, newCartItem])
    } else {
      const updatedCartItems = cartItems.filter(item => item.id !== cartItemId)
      const updatedCartitem = {...cartItem, count: cartItem.count + 1}
      setCartItems([...updatedCartItems, updatedCartitem])
    }
  }

  const removeCartItems = cartItemId => {
    const cartItem = cartItems.find(item => item.id === cartItemId)
    if (cartItem === undefined) return
    const updatedCartItems = cartItems.filter(item => item.id !== cartItemId)
    if (cartItem.count > 1) {
      const updatedCartitem = {...cartItem, count: cartItem.count - 1}
      setCartItems(...updatedCartItems, updatedCartitem)
    } else {
      setCartItems(...updatedCartItems)
    }
  }

  const fetchData = async () => {
    const responseData = await fetch(
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
    )
    const data = await responseData.json()
    setRestaurantData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const {
    restaurant_name: restaurantName = '',
    table_menu_list: tableMenuList = [],
  } = restaurantData[0]

  return (
    <div className="restaurant-app-container">
      <RestaurantHeader restaurantName={restaurantName} cartItems={cartItems} />
      <RestaurantMenu
        tableMenuList={tableMenuList}
        cartItems={cartItems}
        removeCartItems={removeCartItems}
        addCartItems={addCartItems}
      />
    </div>
  )
}

export default App
