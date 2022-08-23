import React, { useContext , useEffect } from 'react'
import NoteContext from '../Context/NoteContext';

const Settings = () => {
  const title = useContext(NoteContext)
  useEffect(() => {
    title.setTitle('Settings Component...')
  },[])
  
  return (
    <div> 
      
    </div>
  )
}

export default Settings;