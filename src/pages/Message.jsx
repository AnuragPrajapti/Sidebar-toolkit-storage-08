// import React, { useContext, useEffect } from 'react'
// import NoteContext from '../Context/NoteContext'
// import './Message.css'
// const Messages = () => {
//   const title = useContext(NoteContext)
//   useEffect(() => {
//     title.setTitle('Messages Here!!')
//   }, [])

//   // let voice = getVoices()

//   return (
//     <>
//       <div id="wrapper">
//         <h1>Simple Text To Speech</h1>
//         <p id="warning">Sorry, your browser does not support the Web Speech API.</p>
//         <textarea id="txtFld">I love the sound of my computer-generated voice.</textarea>
//         <label for="txtFld">Type text above. Then click the Speak button.</label>
//         <div>
//           <button type="button" id="speakBtn">Speak</button>
//           <br />
//             <p>Note: For best results on a Mac, use the latest version of Chrome, Safari, or FireFox. On Windows, use Chrome.</p>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Messages

import {useState} from 'react'

import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import './style.css'

function Messages() {

  const [type, setType]=useState('password');
  const [icon, setIcon]=useState(eyeOff);

  const handleToggle=()=>{    
    if(type==='password'){
      setIcon(eye);      
      setType('text');
    }
    else{
      setIcon(eyeOff);     
      setType('password');
    }
  }

  return (
    <div className='wrapper'>
        <div className='input-field'>
          <input type={type}/>
          <span onClick={handleToggle}><Icon icon={icon} size={25}/></span>
        </div>
    </div>
  );
}

export default Messages;