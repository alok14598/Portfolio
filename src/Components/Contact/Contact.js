import React from 'react'
import "./Contact.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ChatIcon from '@mui/icons-material/Chat';
import XIcon from '@mui/icons-material/X';

export default function Contact() {
  return (
    <div className='Contact'>
        <div className='ContactContainer'>
        <div className='Contactpagetab'>
                <span className='listStyle'  onClick={() => window.open('/',"_self")}>Home</span>
                <span className='listStyle'>Projects</span>
               
                <span className='listStyle ' onClick={() => window.open('/About',"_self")}>About</span>
               
            </div>
            <div className='ContactApps'>
                <LinkedInIcon className='contactlink'  onClick={() => window.open('https://www.linkedin.com/in/alokverma14598',"_blank")}/>
                <GitHubIcon className='contactlink' onClick={() => window.open('https://github.com/alok14598/',"_blank")}/>
                <XIcon className='contactlink'onClick={() => window.open('https://twitter.com/alok14598',"_blank")}/>
                <ChatIcon   className='contactlink' onClick={() => window.open('/Contact',"_self")}/>    
             

            </div>
        </div>
      
    </div>
  )
}
