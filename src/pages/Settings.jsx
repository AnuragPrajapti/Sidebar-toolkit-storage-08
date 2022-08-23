import React, { useContext , useEffect } from 'react'
import NoteContext from '../Context/NoteContext';

const Settings = () => {
  const title = useContext(NoteContext)
  useEffect(() => {
    title.setTitle('Settings Component...')
  },[])
  
  return (
    <div> 
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus libero molestiae, voluptas laborum impedit corporis saepe. Ea aperiam quisquam nemo vel nisi ipsa animi, minus sit sed. Quis, culpa dolore!
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti autem sed soluta libero minus eveniet excepturi voluptates eaque! Dolore laudantium doloribus magni, est debitis ratione nulla commodi recusandae praesentium dolorum!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ipsum nam, ad, sint quae, expedita quos laborum tempora ratione error nostrum. Illo optio, ipsam exercitationem sit expedita ad incidunt unde!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit inventore laudantium blanditiis sit necessitatibus architecto nam unde ullam officia adipisci harum beatae sint quasi error, culpa totam commodi. Facilis, cum.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque, provident sed dignissimos architecto eligendi incidunt repellat quo iusto facere labore illo enim, sapiente ullam eius eos debitis, voluptates libero?
      </p>
    </div>
  )
}

export default Settings;