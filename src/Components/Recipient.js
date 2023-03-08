import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function Recipient() {

    const [recipient, setRecipient] = useState({});

    useEffect(() => {
        let id = window.sessionStorage.getItem("recipientId");
        // console.log(id);
        fetchData(id);
    }, []);

    const fetchData = async (id) => {
        let res = await axios.get("http://localhost:8080/" + id);
        setRecipient(res.data);
        console.log(res.data);
    }

    // const updateHandler = async () => {
    //     window.location.reload(false);
    //     alert("Status updated");
    // }

  return (
    <div className="container-fluid  justify-center h-full min-h-screen p-7 max-w-screen">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-4xl text-orange-500 font-semibold">Details</h1>
                <div className="container-fluid bg-gray-400 justify-center p-9 m-8 w-[1400px] h-fit rounded-md">

                    <div className="container-fluid bg-gray-900 p-9 m-8 w-[1200px] h-fit rounded-md">
                        <div className="flex flex-row">
                            <h1 className="text-orange-500 mr-5">ID</h1>
                            <h3 className="text-orange-300">{recipient.recipientId}</h3>
                        </div>
                        <div className="flex flex-row">
                            <h1 className="text-orange-500 mr-5">Name</h1>
                            <h3 className="text-orange-300">{recipient.recipientName}</h3>
                        </div>
                        <div className="flex flex-row">
                            <h1 className="text-orange-500 mr-5">Mail</h1>
                            <h3 className="text-orange-300">{recipient.recipientEmail}</h3>
                        </div>
                        <div className="flex flex-row">
                            <h1 className="text-orange-500 mr-5">Address</h1>
                            <h3 className="text-orange-300">{recipient.recipientAddress}</h3>
                        </div>
                        <div className="flex flex-row">
                            <h1 className="text-orange-500 mr-5">Phone</h1>
                            <h3 className="text-orange-300">{recipient.recipientPhone}</h3>
                        </div>
                        <div className="flex flex-row">
                            <h1 className="text-orange-500 mr-5">Blood Group</h1>
                            <h3 className="text-orange-300">{recipient.bloodGroup}</h3>
                        </div>

                        
                        </div>
                        </div>
                        <Link to='/updateRecipient'><button onClick={() => {window.sessionStorage.setItem("id", recipient.recipientId)}}>Edit Details</button></Link>
            </div>
        </div>
    );
}