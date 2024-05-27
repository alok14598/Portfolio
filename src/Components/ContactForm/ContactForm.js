import React, { useState } from 'react'
import "./ContactForm.css"
import emailjs from '@emailjs/browser';

export default function ContactForm() {

  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [orgname, setOrgName] = useState('');
  const [status,sendStatus]=useState(false);
  const [notstatus,notsendStatus]=useState(false);
  const [loading,setLoading]= useState(false);

  const handleButtonSubmit = () => {
        if(loading){
    sendStatus(true)
    setTimeout(() => {
      sendStatus(false);
    }, 10000);}
    else{
      notsendStatus(false);
      
      
    }

  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
     // Your EmailJS service ID, template ID, and Public Key
     const serviceId = 'service_hgelo2a';
     const templateId = 'template_qbib11m';
     const publicKey = 'NiHZqDqKPbUvoabKY';
 
     // Create a new object that contains dynamic template params
     const templateParams = {
       from_name: username,
       from_email: email,
       to_name: 'ALOK VERMA',
       from_org:orgname,
       message: message,
     };
 
     // Send the email using EmailJS
     emailjs.send(serviceId, templateId, templateParams, publicKey)
       .then((response) => {
         console.log('Email sent successfully!', response);
         setName('');
         setEmail('');
         setMessage('');
       })
       .catch((error) => {
         console.error('Error sending email:', error);
       });
  }
  return (
    <div className='ContactForm'>
        <div className='ContactFormContainer'>
        <div className='skilltitle'>Contact Me<span className='dot'>.</span></div>
        <form onSubmit={handleSubmit} id="userForm">
            <div className='input1'>
                <input type='text' className='input11' placeholder='Name' value={username}
        onChange={(e) => setName(e.target.value)} required
></input>
                <input type='text' className='input11' placeholder='Email' value={email}
        onChange={(e) => setEmail(e.target.value)} required
></input>
            </div>
            <div className='input1'>
            <input type='text' className='input12' value={orgname}
        onChange={(e) => setOrgName(e.target.value)} required
 placeholder='Organization Name'></input>
                
            </div>
            <div className='input1'>
            <textarea type='text' className='input13' placeholder='Message: How Can I Contact You ??' value={message}
        onChange={(e) => setMessage(e.target.value)} required
></textarea>
                
            </div>
            <button className='SendButton' type="submit" onClick={handleButtonSubmit} >Send Now</button>
           {status && <span className='message'> Message Sent successfully to ALOK VERMA</span>}
           {notstatus && <span className='notmessage'> Please fill Out All details</span>}
            </form>
        </div>

      
    </div>
  )
}
