import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AllRecipients() {

    const [recipients, setRecipients] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        let res = await axios.get("http://localhost:8080/");
        setRecipients(res.data);
        console.log(res.data);
    }

  return (
    <div className="container-fluid bg-white-900 justify-center h-full min-h-screen p-7 w-fit max-w-screen">
    
    <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl text-orange-500 font-semibold">Recipients</h1>
        <div className="container-fluid bg-gray-400 justify-center p-9 m-8 w-[1400px] h-fit rounded-md">

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Recipient ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Phone
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Address
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Blood Group
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">

                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            recipients.map((recipient) => {
                                return (
                                    <Recipient key={recipient.recipientId} recipient={recipient} />
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>

        </div>

    </div>
</div>
  )
}

function Recipient(props) {
    const Recipient = props.recipient;
    const navigate = useNavigate();

    const handlePreview = () => {
        window.sessionStorage.setItem("recipientId", Recipient.recipientId);  //
        navigate("/recipient");
    }

    const handleAccept = async () => {
        await axios.put("http://localhost:8080/accept/" + Recipient.recipientId);
        window.location.reload(false);
        alert("Status Updated");
    }

    const handleDeliver = async () => {
        await axios.put("http://localhost:8080/donated/" + Recipient.recipientId);
        window.location.reload(false);
        alert("Status updated");
    }

    const handleDelete = async () => {
        await axios.delete("http://localhost:8080/" + Recipient.recipientId);
        window.location.reload(false);
        alert("Recipient deleted");
    }

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {Recipient.recipientId}
            </th>
            <td className="px-6 py-4">
                {Recipient.recipientName}
            </td>
            <td className="px-6 py-4">
                {Recipient.recipientEmail}
            </td>
            <td className="px-6 py-4">
                {Recipient.recipientPhone}
            </td>
            <td className="px-6 py-4">
                {Recipient.recipientAddress}
            </td>
            <td className="px-6 py-4">
                {Recipient.bloodGroup}
            </td>
            <td className="px-6 py-4">
                {Recipient.status}
            </td>
            <td className="px-3 py-4 text-right flex">

                {/* Preview */}
                <button onClick={handlePreview}>
                    <svg className="h-5 w-5 text-purple-500 mt-2 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                </button>

                {/* Accept */}
                <button onClick={handleAccept}>
                    <svg className="h-5 w-5 text-green-500 mt-2 mr-3" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M7 11v 8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
                    </svg>
                </button>

                
                {/* Deliver */}
                <button onClick={handleDeliver}>
                <svg className="h-5 w-5 text-white mt-2 mr-3"fill="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path clip-rule="evenodd" fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"></path>
</svg>
                </button>

                {/* Delete */}
                <button onClick={handleDelete}>
                    <svg className="h-4 w-4 text-red-500 mt-2.5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" />
                    </svg>
                </button>

            </td>
        </tr>
    )
}