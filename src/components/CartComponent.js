export const CartComponent = (props) => {
    let cartItems = props.cartItems;
    let items = cartItems.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
    <div>
        
        <p>Item Name: {item.item.name}</p>
        <p>Quantity: {item.count}</p>
        <p>Price: {item.item.price}</p>
    </div>
   ));
   return (
    <div>
    {items}
    <p>Cart Total: {props.total}</p>
    </div>
   );
}