import React from 'react';
import { useForm } from 'react-hook-form';

const AddItems = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
      const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/bikes`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result)
        })
    };

  console.log(errors)
    return (
        <div>
            <h1 className="text-center my-4">Add New Items</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Bike Name" {...register("name", {required: true})} />
      <input type="text" placeholder="Supplier" {...register("supplierName", {required: true})} />
      <input type="text" placeholder="Price" {...register("price", {required: true})} />
      <input type="number" placeholder="Quantity" {...register("quantity", {required: true})} />
      <select {...register("type", { required: true })}>
        <option value="Naked Sports">Naked Sports</option>
        <option value="Sports">Sports</option>
        <option value="Standard">Standard</option>
        <option value="Cruiser">Cruiser</option>
        <option value="Cafe Racer">Cafe Racer</option>
      </select>
      <select {...register("brand", { required: true })}>
        <option value="Yamaha">Yamaha</option>
        <option value="Tvs">Tvs</option>
        <option value="Suzuki">Suzuki</option>
        <option value="Honda">Honda</option>
        <option value="Bajaj">Bajaj</option>
        <option value="Hero">Hero</option>
        <option value="Lifan">Lifan</option>
        <option value="Kawasaki">Kawasaki</option>
      </select>
      <input type="text" placeholder="Engine Type" {...register("engineType", {})} />
      <input type="text" placeholder="Displacement" {...register("Displacement", { max: 10, maxLength: 10})} />
      <input type="text" placeholder="Maximum Power" {...register("maximumPower", { maxLength: 19})} />
      <input type="text" placeholder="Maximum Torque" {...register("maximumTorque", { maxLength: 20})} />

      <select {...register("brakingSystem")}>
        <option value="Single Disc">Single Disc</option>
        <option value="Dual Disk">Dual Disk</option>
        <option value="Dual Channel ABS">Dual Channel ABS</option>
        <option value="Single Channel ABS">Single Channel ABS</option>
      </select>
      <input type="url" placeholder="ImageURL" {...register("img", {required: true})} />
      <textarea {...register("description", {required: true, maxLength: 201})} />

      <input type="submit" />
    </form>
        </div>
    );
};

export default AddItems;