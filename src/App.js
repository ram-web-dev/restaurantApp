import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import './App.css'

import RestaurantHeader from './RestaurantHeader'
import RestaurantMenu from './RestaurantMenu'

const apiStatus = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
  intial: 'INITIAL',
}
const App = () => {
  const [cartItems, setCartItems] = useState([])
  const [restaurantData, setRestaurantData] = useState([{}])
  const [status, setStatus] = useState(apiStatus.intial)

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
      setCartItems([...updatedCartItems, updatedCartitem])
    } else {
      setCartItems([...updatedCartItems])
    }
  }

  const renderLoader = () => (
    <div className="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  const fetchData = async () => {
    setStatus(apiStatus.loading)
    const responseData = await fetch(
      'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
    )
    const data = await responseData.json()
    console.log(data)
    setStatus(apiStatus.success)
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
      {status === apiStatus.success ? (
        <>
          <RestaurantHeader
            restaurantName={restaurantName}
            cartItems={cartItems}
          />
          <RestaurantMenu
            tableMenuList={tableMenuList}
            cartItems={cartItems}
            removeCartItems={removeCartItems}
            addCartItems={addCartItems}
          />
        </>
      ) : (
        renderLoader()
      )}
    </div>
  )
}

export default App
