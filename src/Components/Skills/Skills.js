import React from 'react'
import "./Skill.css"

export default function Skills() {
  return (
    <div className='skills'>
        <div className='skillContainer'>
            <div className='skilltitle'>Skills<span className='dot'>.</span></div>
            <div className='SkillSection'>
                <div className='frontend'>
                <h2>Frontend</h2>
                        <li>React</li>
                        <li>NextJs 14</li>
                        <li>JavaScript</li>
                        <li>HTML/CSS</li>
                </div>
                <div className='backend'>
                <h2>Backend</h2>
                        <li>NodeJs</li>
                        <li>Express</li>
                        <li>EJS</li>
                        <li>TypeScript</li>
                </div>
                <div className='database'>
                <h2>Database</h2>
                        <li>mySql</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>PostgreSql</li>
                </div>
                <div className='tools'>
                <h2>Developer Tools</h2>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Visual Studio</li>
                    <li>Material UI </li>

                        
                </div>
                <div className='tools'>
                <h2>Others</h2>
                    <li>System Design</li>
                    <li>OOPS</li>
                    <li>DBMS</li>
                    <li>DSA</li>

                        
                </div>

            </div>
        </div>
    </div>
  )
}
