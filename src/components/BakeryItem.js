
// TODO: create a component that displays a single bakery item

export const BakeryItem = (props) => {

    return (
        <div className="BakeryItem" key={props.item.name}>
            <img src={props.item.image} alt={props.item.name}/>
            <div className="BakeryItemContent">
                <h2>{props.item.name}</h2>
                <h3>{props.item.price}</h3>
                <p>{props.item.description}</p>
                <button className="button" onClick={()=>{
                    props.addItemToCart(props.item);
                }}>Add to Cart</button>
            </div>
        </div>
    )
}
