import { useEffect, useState } from "react"


const useInventoryItems = () => {
    const [inventoryItems, setInventoryItems] = useState([]);

    useEffect( () => {
        fetch('https://bike-house-34.herokuapp.com/bikes')
        .then(res => res.json())
        .then(data => setInventoryItems(data))
    },[inventoryItems])

    return [inventoryItems, setInventoryItems];
}


export default useInventoryItems;