import "./App.css";
import { useState} from "react";
import bakeryData from "./assets/bakery-data.json";
import {BakeryCatalogue} from "./components/BakeryCatalogue";
import {CartComponent} from "./components/CartComponent";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
  item.count = 1;
});
/* ############################################################## */


function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const addItemToCart = (item) => {

     const pastCartItem = cart.find(cartItem => {
      return cartItem.item.name == item.name
     });
     
      if(pastCartItem) {
        setCart(cart.map(cartItem => {
          if(cartItem.item.name == item.name)
            return {item: pastCartItem.item, 
                   count: pastCartItem.count + 1,
                   total: pastCartItem.item.price * (pastCartItem.count + 1)};
          else 
            return cartItem
        }));
      } else {
        setCart([...cart, {item: item, count: 1, total: item.price}]);
      }
      setPrice(cart.reduce((sum, cartItem) => sum + cartItem.total, 0));
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
    
     <BakeryCatalogue bakeryData={bakeryData} addItemToCart={addItemToCart}></BakeryCatalogue>
      <CartComponent cartItems = {cart} total = {price}></CartComponent>
    </div>
  );
}

export default App;
