import React from 'react'
import "./Header.css";


export default function Header() {
  return (
    <div className='header'>
        <div className='headerContainer'>
            <div className='profileText'>
                <p className='welcome'> Hey,I'm Alok 👋</p>
                 <span className='title'>Full<span className='midtitle'>Stack</span> Web<br /> Developer</span>
                <p className='description' >FullStack Web Developer expertise in frontend and backend development, experienced in building Industry Level Requirement Websites</p>
                <div className='Mainbuttons'>
                    <button className='contactbutton' onClick={() => window.open('/Contact',"_self")}>Get In Touch</button>
                    <button className='projectsbutton'>Browse Projects</button>
                    <button className='resumebutton'>Download Resume</button>
                </div>
            </div>
            <div className='profileImage'>
                    <div className='profilepic'>
                    <img src='/assets/images/Alok2.png' alt='pic' className='mainpic'/>
                    </div>
            </div>
            
        </div>
    </div>
  )
}
