import React from 'react'
import NoteContext from '../../Context/NoteContext'
import { useContext, useEffect } from 'react'
import './About.css'
import img from '../../Images/Anurag.jpeg'

const About = () => {
  const title = useContext(NoteContext);

  useEffect(() => {
    title.setTitle("About Us ")
  }, [])

  return (
    <>
      <div className="container">
      <div className='resume' >
        <div className='headingContainer'>
          <img src={img} alt="img" />
          <p>Anurag Prajapati</p>
          <div className='contactDetails'>
            <p className='peragraph' >Vishal Palace, Indore(M.P) <br />
              Mobile No :<span>+91-6265336686</span><br />
              Email ID: <span>apanurag1998@gmail.com</span>
            </p>
          </div>
        </div>
        <div className='objective'>
          <h3>OBJECTIVE</h3>
          <p className='peragraph'>
            To Work in a dynamic professional evironment with a growing and innovative thinking for benefit of the organization and my self.
          </p>
        </div>
        <div className='acadmicBackground'>
          <h3>ACADMIC BACKGROUND</h3>
          <p className='peragraph'>
            B.Com(Computer Application) <br />
            M.B Khalsa College (DAVV),Indore <br />
            (2017 - 2020) 
          </p>
          <p className='peragraph'>
             Higher Secondary (Standard XII) <br />
             Vidhya Vareedhi Bal Vinay Mandir <br />
             Board : MPBSE        Year - 2016 
          </p>
          <p className='peragraph'>
            High School (Standard X) <br />
            Vidhya Vareedhi Bal Vinay Mandir <br />
            Board : MPBSE        Year - 2014
          </p>
        </div>
         <div className='hobbies'>
           <h3>HOBBIES</h3>
           <p className='peragraph'>
             * Travelling <br />
             * Playing Chess <br />
             * Swimming <br />
             * Learning A New Skills
           </p>
          </div>  
          <div className='strength'>
             <h3>STRENGTH</h3>
             <p className='peragraph'>
                * Self-Motivated <br />
                * Active Listening <br />
                * Quick Learner
             </p>
           </div> 
           <div className='certificate'>
              <h3>CERTIFICATE</h3>
              <p className='peragraph'>
                * C And C++ <br />
                * HTML , CSS , BootStap <br />
                * MERN Stack <br />
                * PMKVY (Field Technician - Computing & <br />
                  Peripherals) 2017-18  
              </p>
           </div>
           <div className="experience">
             <h3>EXPERIENCE</h3>
              <p className='peragraph'>
                * <b>Nikem Drugs PVT.LTD.</b><br />
                  (11-Dec-2017 to 05-11-2018) <br />
                   As an Supervisor <br/>
                *  <b>YuvaSoft Technology PVT.LTD.</b><br/>
                    (11-Jun-2022 to Current_Working)    
              </p>
           </div>
           <div className="skills">
             <h3>SKILLS</h3>
             <p className='peragraph'>
                * IT : MicroSoft Word, Power Poind, <br/>
                   basic of MicroSoft Excel. <br />
                * C & C++ oops concepts. <br />
                * Mern Stack(MongoDB , ExpressJS , ReactJS , NodeJS) <br />
                * Computer Hardware(P.M.K.V.Y) <br />
                * Software installation. <br />
                * Web Designing. <br />
                * UI Designing.   
             </p>
           </div>
           <div className="areaOfInterest">
             <h3>AREA OF INTEREST</h3>
             <p className='peragraph'>
                * Information Technology. <br />
                * Always ready to lern new technology
             </p>
           </div>
           <div className='project'>
              <h3>PROJECT</h3>
               <p>
                 * Ather Energy. <br />
                   (11-Aug-2022 to Present)
               </p>
           </div>
           <div className="declaration">
              <h3>DECLARATION</h3>
                <p>
                   I hereby declare that information provided in true to the best of my knowledge and understanding...
                </p>
              </div>
      </div>
      </div>

    </>
  )
}

export default About