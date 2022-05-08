import { async } from '@firebase/util';
import { TrashIcon } from '@heroicons/react/solid';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const MyItems = () => {
    const [user] = useAuthState(auth);
    
    const [myItems, setMyItems] = useState([]);
    
    useEffect(() => {
       

       const getMytems = async() => {
            const email = user.email;
            const url = `https://bike-house-34.herokuapp.com/myItems?email=${email}`;
            const {data} = await axios.get(url);
            setMyItems(data)
       }
      getMytems(); 
      
    },[user,myItems])

    const tableHeadTitles = ["Item Name", "Price", "Quantity","Supplier","Img","Delete"]

    const handleDeleteItem = id => {
        const proceed = window.confirm("Are you sure you want to delete this item?");
        if(proceed){
            const url = `https://bike-house-34.herokuapp.com/bike/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        }
    }

    return (
        <div className='mx-5'>
            <h1 className='text-center my-4'>My Items</h1>
            <Button className='d-block ms-auto' variant='danger'>Add Items</Button>
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
                        myItems.map((item,index) =>
                        
                            <tr key={item._id}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>{item.supplierName}</td>
                                <td><img src={item.img} width="50" alt="" /></td>
                                <td><span><TrashIcon onClick={() => handleDeleteItem(item._id)} style={{width:'30px',cursor:'pointer',color:'lightgreen'}}></TrashIcon></span></td>
                            </tr>
                        )
                    }


                </tbody>
            </Table>
        </div>
    );
};

export default MyItems;