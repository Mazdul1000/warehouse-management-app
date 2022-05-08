import { useEffect, useState } from "react";




const useSingleItem = itemId => {

const[singleItem,setSingleItem] = useState([]);

   useEffect(() => {
    const url = `https://bike-house-34.herokuapp.com/bike/${itemId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setSingleItem(data))
},[]) 

return [singleItem,setSingleItem]
}

export default useSingleItem;

