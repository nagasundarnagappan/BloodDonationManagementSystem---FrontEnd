import React from "react";
import Recipient from "./Components/Recipient";
import AllRecipients from "./Components/AllRecipients";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import AddRecipient from "./Components/AddRecipient";
import UpdateRecipients from "./Components/UpdateRecipients"; 

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<AllRecipients />} />
        <Route path="/addRecipient" element={<AddRecipient/>}/>
        <Route path="/recipient" element={<Recipient/>} />
        <Route path='/updateRecipient' element={<UpdateRecipients/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
