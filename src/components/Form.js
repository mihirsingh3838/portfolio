import { useState } from "react"
import "./FormStyle.css"

import React from 'react'


const Form = () => {

  const [data, setData]= useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const {name, email, subject, message} = data

  const handleChnage = (e) =>{
    setData({...data, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();

    try{
      const response= await fetch('https://v1.nocodeapi.com/mihirsingh3838/google_sheets/ghmkgofNjBAXRINm?tabId=Sheet1', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify([[name, email, subject, message]])
      });
      await response.json()
      setData({...data, name:"", email:"", subject:"", message:""});
    }catch (err){
      console.log(err)
    }
  };


  return (
    <div className="form">
        <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" value={name} onChange={handleChnage}/>
            <label>Email</label>
            <input type="email" name="email" value={email} onChange={handleChnage}/>
            <label>Subject</label>
            <input type="text" name="subject" value={subject} onChange={handleChnage}/>
            <label>Message</label>
            <textarea rows={7} placeholder="Type your message here" name="message" value={message} onChange={handleChnage}/>
            <button className="btn">SUBMIT</button>
        </form>
    </div>
  )
}

export default Form