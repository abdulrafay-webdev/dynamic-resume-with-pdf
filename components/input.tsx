"use client"
import { useState } from "react";


export default function Input() {

  


  const [formData,setFormData]:any=useState({
    name:"",
    email:""
  });

  const [submitdata,setsubmitdata]:any=useState("");

  const handleChange=(e:any)=>{
    const name = e.target.name;
    const value = e.target.value;
    console.log(name,value);
    // issay value data may update hojaygi 
    setFormData({
      ...formData,[name]:value,
    });
  }


  const handleSubmit = (event:any)=>{
    event.preventDefault();
    setsubmitdata(formData)
  }


  return (




    
    <div className="bg-blue-300">
      <form onSubmit={handlesubmit}>
      <label>Name</label>
      <input type="text" placeholder="enter name" name="name" value={data.name} onChange={handlechange} />
      <br /> <br />
      <label>email</label>
      <input type="email" placeholder="enter email" name="email" value={data.email} onChange={handlechange} />
      <br /> <br />
      <button type="submit">submit</button>
      </form>
      <h1>{submitdata.email} {submitdata.name}</h1>
    </div>
  );
}
