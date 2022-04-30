import React from 'react';
import { Table } from 'react-bootstrap';
import useInventoryItems from '../../hooks/useInventoryItems';

const ManageInventory = () => {
    const [inventoryItems, setInventoryItems] = useInventoryItems();
    const tableHeadTitles = ["Item Name", "Price", "Quantity","Supplier","Img","Delete"]

    return (
        <div>
            <h1>All Items</h1>
            <Table responsive className='text-center'>
                <thead>
                    <tr>
                        <th>#</th>
                        {tableHeadTitles.map((title, index) => (
                            <th key={index}><p>{title}</p></th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        inventoryItems.map((item,index) =>
                        
                            <tr>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.supplierName}</td>
                                <td><img src={item.img} width="50" alt="" /></td>
                                <td>Delete</td>
                            </tr>
                        )
                    }


                </tbody>
            </Table>
        </div>
    );
};

export default ManageInventory;