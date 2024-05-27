import React from 'react'
import ChatIcon from '@mui/icons-material/Chat';
import "./Navbar.css"
import { Link } from 'react-router-dom';


export default function Navbar() {

 

  return (
    <div className='navbar'>
      <div className='navbarContainer'>
           <Link to="/"  style={{ textDecoration: 'none' }}><div className='logo' >Alok Verma<span className='dot'>.</span></div></Link> 
            <div className='pagetab'>
                <li  onClick={() => window.open('/',"_self")}>Home</li>
                <li>Projects</li>
                <li onClick={() => window.open("/About","_self")}>About</li>
               
            </div>
            <div className='contact'>
            <ChatIcon onClick={() => window.open('/Contact',"_self")}/>            </div>
      </div>
    </div>
  )
}
