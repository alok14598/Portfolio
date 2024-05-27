import React from 'react'
import "./Experience.css"
import DoneIcon from '@mui/icons-material/Done';

export default function Experience() {
  return (
    <div className='Experience'>
        <div className='ExperienceContainer'>
        <div className='skilltitle'>Experience<span className='dot'>.</span></div>
        <div className='companyDescription'>
            <label className='company'>System Engineer </label> <label className='companyname'>@ Tata Consultancy Services (TCS)</label><div  className='companytime'> <span className='companytime'>January 2022 - November 2023</span></div>
            <div className='projectDesc'>
                <DoneIcon className='tick'/>
                <p className='description modification'>Developed and maintained code for in-house and client websites primarily using HTML, CSS, Node, JavaScript, and React</p>
            </div>
            <div className='projectDesc'>
            <DoneIcon className='tick'/>
                <p className='description modification'>Worked with a team to build a marketing website and e-commerce platform for startup.</p>
            </div>
            <div className='projectDesc'>
            <DoneIcon className='tick'/>
            <p className='description modification'>Interfaced with clients on a weekly basis, providing technological expertise.</p>
            </div>  
        </div>
        </div>
    </div>
  )
}
