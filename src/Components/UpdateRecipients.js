import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function UpdateRecipients() {

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [blood, setBlood] = useState("");
    const navigate = useNavigate();

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleMail = (e) => {
        setMail(e.target.value);
    }

    const handlePhone = (e) => {
        setPhone(e.target.value);
    }

    const handleAddress = (e) => {
        setAddress(e.target.value);
    }
    
    const handleBlood = (e) => {
        setBlood(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let id = window.sessionStorage.getItem("id",Recipient.recipientId);
        const data = { "recipientId":id,"recipientName": name, "recipientEmail": mail, "recipientPhone": phone, "recipientAddress": address, "bloodGroup": blood};
        await axios.put("http://localhost:8080/update/" + id, data);
        console.log(name);
        console.log(id);
        alert("Recipient updated Succesfully");
        navigate("/");
    }
  return (
    <div className="container-fluid flex bg-white-900 items-center justify-center h-screen p-5 w-screen">


    <form className="w-96">

        <div className="relative z-0 w-full mb-6 group">
            <input onChange={handleName} type="text" name="recipientName" id="conAddress" className="block py-2.5 px-0 w-full text-sm text-white-1000 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-orange-500 dark:border-gray-600 dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
            <label for="conAddress" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Recipient name</label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
            <input onChange={handleMail} type="text" name="producerAddress" id="proAddress" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-orange-500 dark:border-gray-600 dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
            <label for="proAddress" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">E-Mail</label>
        </div>

  
        <div className="relative z-0 w-full mb-6 group">
            <input onChange={handlePhone} type="text" name="productId" id="proId"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-orange-500 dark:border-gray-600 dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
            <label for="proId" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
            <input onChange={handleAddress} type="text" name="productId" id="proId"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-orange-500 dark:border-gray-600 dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
            <label for="proId" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address</label>
        </div>

        <div className="relative z-0 w-full mb-6 group">
            <input onChange={handleBlood} type="text" name="productName" id="proName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-orange-500 dark:border-gray-600 dark:focus:border-orange-400 focus:outline-none focus:ring-0 focus:border-white peer" placeholder=" " required />
            <label for="proName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Blood Group</label>
        </div>

       

     
        <div className="flex justify-center mt-[50px]">
            <button onClick={handleSubmit} type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mr-2 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-gray-800">update Recipient</button>
            
        </div>

    </form>


</div>
  )
}
