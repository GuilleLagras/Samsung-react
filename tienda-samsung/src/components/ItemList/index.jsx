import Item from "../Item";

import React from "react";

const ItemList = ({data = []}) => {
    return(
        data.map(celu => <Item key={celu.id}info ={celu} />)
    );
}

export default ItemList;