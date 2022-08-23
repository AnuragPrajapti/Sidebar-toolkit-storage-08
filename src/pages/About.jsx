import React from 'react'
import NoteContext from '../Context/NoteContext'
import { useContext , useEffect } from 'react'
const About = () => {
  const title = useContext(NoteContext);

  useEffect(() => {
    
     title.setTitle("About Us ")

  }, [])
  

  return (
    <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, quod ipsam. Facere eos ex a obcaecati soluta, nam ad enim. Laboriosam asperiores nobis fugit explicabo! Mollitia optio ab magni modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis exercitationem debitis eligendi. Expedita molestiae architecto cumque pariatur molestias minima nisi tenetur, atque dolores, id corrupti voluptatum vero quam ratione velit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quam, accusamus fuga facere blanditiis odit debitis ipsum inventore est explicabo nulla similique facilis error in magnam doloribus dolores. Aliquam, quaerat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis reiciendis quam ullam obcaecati, animi beatae sed amet ratione quae labore eius saepe natus at delectus. Maxime quia hic sunt non! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste itaque, incidunt esse, id praesentium pariatur quasi facere iusto, beatae dolorum maxime in exercitationem cum dicta necessitatibus cumque expedita corporis.</p>
    </div>
  )
}

export default About