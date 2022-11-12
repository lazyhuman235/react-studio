import {BakeryItem} from "./BakeryItem.js";

export const BakeryCatalogue = (props) => {
    let bakeryData = props.bakeryData;
    let items = bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components

     <BakeryItem item ={item} addItemToCart={props.addItemToCart}></BakeryItem>
    ));
    return (
        <div class = "BakeryCatalogueContainer" >
            {items}
        </div>
    );
}