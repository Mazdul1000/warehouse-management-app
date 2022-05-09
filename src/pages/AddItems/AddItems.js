import React from 'react';
import { Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './AddItems.css';

const AddItems = () => {
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const [user] = useAuthState(auth);

      const onSubmit = data => {
        console.log(data);
        const email = user.email;
        data.email = email;
        const url = `https://bike-house-34.herokuapp.com/bikes`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
            toast("Item added!!!");
            reset();
        })
        
    };

  console.log(errors)
    return (
        <div>
          <Container>

          <h1 className="add-item-title text-center my-4">Add New Item</h1>

<form className='add-form' onSubmit={handleSubmit(onSubmit)}>
<input className="form-group" type="text" placeholder="Bike Name" {...register("name", {required: true})} />
<input className="form-group" type="text" placeholder="Supplier" {...register("supplierName", {required: true})} />
<input className="form-group" type="text" placeholder="Price" {...register("price", {required: true})} />
<input className="form-group" type="number" placeholder="Quantity" {...register("quantity", {required: true})} />
<select className="form-group" {...register("type", { required: true })}>
<option value="Naked Sports">Naked Sports</option>
<option value="Sports">Sports</option>
<option value="Standard">Standard</option>
<option value="Cruiser">Cruiser</option>
<option value="Cafe Racer">Cafe Racer</option>
</select>
<select className="form-group" {...register("brand", { required: true })}>
<option value="Yamaha">Yamaha</option>
<option value="Tvs">Tvs</option>
<option value="Suzuki">Suzuki</option>
<option value="Honda">Honda</option>
<option value="Bajaj">Bajaj</option>
<option value="Hero">Hero</option>
<option value="Lifan">Lifan</option>
<option value="Kawasaki">Kawasaki</option>
</select>
<input className="form-group" type="text" placeholder="Engine Type (optional)" {...register("engineType", {})} />
<input className="form-group" type="text" placeholder="Displacement (optional)" {...register("Displacement", { max: 10, maxLength: 10})} />
<input className="form-group" type="text" placeholder="Maximum Power (optional)" {...register("maximumPower", { maxLength: 19})} />
<input className="form-group" type="text" placeholder="Maximum Torque (optional)" {...register("maximumTorque", { maxLength: 20})} />

<select className="form-group" {...register("brakingSystem")}>
<option value="Single Disc">Single Disc</option>
<option value="Dual Disk">Dual Disk</option>
<option value="Dual Channel ABS">Dual Channel ABS</option>
<option value="Single Channel ABS">Single Channel ABS</option>
</select>
<input className="form-group" type="url" placeholder="ImageURL" {...register("img", {required: true})} />
<textarea className="form-group" placeholder='Description' {...register("description", {required: true, maxLength: 500})} />

<input className="submit-btn" type="submit" />
</form>
   </Container>
           
        </div>
    );
};

export default AddItems;