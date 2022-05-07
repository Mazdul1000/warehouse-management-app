import React from 'react';
import useInventoryItems from '../../../hooks/useInventoryItems';
import './Home.css';
import Inventory from '../Inventory/Inventory';
import {Row} from 'react-bootstrap';


const Home = () => {
    const [inventoryItems,setInventoryItems] = useInventoryItems();

    
    return (
        <div style={{padding:"0 50px"}}>
            <h1>This is Home Section</h1>

            <div className="features">
                <h1 className="text-center">Featured Items</h1>
                <Row xs={1} md={2} xl={3} className="g-4">
                     {
                    inventoryItems.map(item => <Inventory key={item.id} item ={item}></Inventory>)
                }
                
                   </Row>
                
  

                

                
            </div>
        </div>
    );
};

export default Home;