import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <div className='Footer'>
        <div className='FooterContainer'>
        <div className='listStyle extra'>        <label>Interested In Working Together</label><label className='companyname'> ?</label>
        <div className='Mainbuttons extra'>
                    <button className='contactbutton' onClick={() => window.open('/Contact',"_self")}>Get In Touch</button>
                    <button className='projectsbutton'>Browse Projects</button>
                    <button className='resumebutton'>Download Resume</button>
                </div>
                </div>

        <div className='footertext'>
        <p className='descriptions' >Thankyou Everyone 💜 for Visiting the Site. Please Support ! 🙏 ❤️</p>

        </div>      
        </div>
      
    </div>
  )
}
