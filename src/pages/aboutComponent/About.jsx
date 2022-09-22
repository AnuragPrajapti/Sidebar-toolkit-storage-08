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
      <div className="AboutWrapper">
        <div className='headingContainer ' >
          <img src={img} alt="img" />
            <p>Anurag Prajapati</p>
        </div>
      </div>
    </>
  )
}

export default About